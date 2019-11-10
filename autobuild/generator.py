"""Generate an autobuild config based on a specification."""
import collections
import json
import sys

# Strength = 0, Energy = 1, Dexterity = 2, Vitality = 3.
BASE_STATS = {
    'sorceress': [10, 35, 25, 10],
    'paladin': [25, 15, 20, 25],
    'barbarian': [30, 10, 20, 25],
    'necromancer': [15, 25, 25, 15],
    'druid': [15, 20, 20, 25],
    'assassin': [20, 20, 20, 25],
    'amazon': [20, 25, 20, 15],
}

SKILL_REQUIREMENTS = {
    # Sorceress cold.
    'ice bolt': [0],
    'frozen armor': [0],
    'frost nova': [6],
    'ice blast': [6, 'ice bolt'],
    'shiver armor': [12, 'frozen armor', 'ice blast'],
    'glacial spike': [18, 'ice blast'],
    'blizzard': [24, 'frost nova', 'glacial spike'],
    'chilling armor': [24, 'shiver armor'],
    'frozen orb': [30, 'blizzard'],
    'cold mastery': [30],

    # Sorceress lightning.
    'charged bolt': [0],
    'static field': [6],
    'telekinesis': [6],
    'nova': [12, 'static field'],
    'lightning': [12, 'charged bolt'],
    'chain lightning': [18, 'lightning'],
    'teleport': [18, 'telekinesis'],
    'thunder storm': [24, 'nova', 'chain lightning'],
    'energy shield': [24, 'chain lightning', 'teleport'],
    'lightning mastery': [30],

    # Sorceress fire.
    'fire bolt': [0],
    'warmth': [0],
    'inferno': [6],
    'blaze': [12, 'inferno'],
    'fire ball': [12, 'fire bolt'],
    'fire wall': [18, 'blaze'],
    'enchant': [18, 'fire ball', 'warmth'],
    'meteor': [24, 'fire wall', 'fire ball'],
    'fire mastery': [30],
    'hydra': [30, 'enchant'],

    # Paladin defensive.
    'prayer': [0],
    'resist fire': [0],
    'defiance': [6],
    'resist cold': [6],
    'cleansing': [12, 'prayer'],
    'resist lightning': [12],
    'vigor': [18, 'cleansing', 'defiance'],
    'meditation': [24, 'cleansing'],
    'redemption': [30, 'vigor'],
    'salvation': [30],

    # Paladin offensive.
    'might': [0],
    'holy fire': [6, 'might'],
    'thorns': [6],
    'blessed aim': [12, 'might'],
    'concentration': [18, 'blessed aim'],
    'holy freeze': [18, 'holy fire'],
    'holy shock': [24, 'holy freeze'],
    'sanctuary': [24, 'holy freeze', 'thorns'],
    'fanaticism': [30, 'concentration'],
    'conviction': [30, 'sanctuary'],

    # Paladin combat.
    'sacrifice': [0],
    'smite': [0],
    'holy bolt': [6],
    'zeal': [12, 'sacrifice'],
    'charge': [12, 'smite'],
    'vengeance': [18, 'zeal'],
    'blessed hammer': [18, 'holy bolt'],
    'conversion': [24, 'vengeance'],
    'holy shield': [24, 'blessed hammer', 'charge'],
    'fist of the heavens': [30, 'conversion', 'blessed hammer'],

    # Barbarian warcries.
    'howl': [0],
    'find potion': [0],
    'taunt': [6, 'howl'],
    'shout': [6, 'howl'],
    'find item': [12, 'find potion'],
    'battle cry': [18, 'taunt'],
    'battle orders': [24, 'shout'],
    'grim ward': [24, 'find item'],
    'war cry': [30, 'battle cry', 'battle orders'],
    'battle command': [30, 'battle orders'],

    # Barbarian combat masteries.
    'sword mastery': [0],
    'axe mastery': [0],
    'mace mastery': [0],
    'pole arm mastery': [6],
    'throwing mastery': [6],
    'spear mastery': [6],
    'increased stamina': [12],
    'iron skin': [18],
    'increased speed': [24, 'increased stamina'],
    'natural resistance': [30, 'iron skin'],

    # Barbarian combat skills.
    'bash': [0],
    'leap': [6],
    'double swing': [6, 'bash'],
    'stun': [12, 'bash'],
    'double throw': [12, 'double swing'],
    'leap attack': [18, 'leap'],
    'concentrate': [18, 'stun'],
    'frenzy': [24, 'double throw'],
    'whirlwind': [30, 'leap attack', 'concentrate'],
    'berserk': [30, 'concentrate'],

    # Necromancer summoning.
    'skeleton mastery': [0, 'raise skeleton'],
    'raise skeleton': [0],
    'clay golem': [6],
    'golem mastery': [12, 'clay golem'],
    'raise skeletal mage': [12, 'raise skeleton'],
    'blood golem': [18, 'clay golem'],
    'summon resist': [24, 'golem mastery'],
    'iron golem': [24, 'blood golem'],
    'fire golem': [30, 'iron golem'],
    'revive': [30, 'iron golem', 'raise skeletal mage'],

    # Necromancer pnb.
    'teeth': [0],
    'bone armor': [0],
    'poison dagger': [6],
    'corpse explosion': [6, 'teeth'],
    'bone wall': [12, 'bone armor'],
    'poison explosion': [18, 'poison dagger', 'corpse explosion'],
    'bone spear': [18, 'corpse explosion'],
    'bone prison': [24, 'bone wall', 'bone spear'],
    'poison nova': [30, 'poison explosion'],
    'bone spirit': [30, 'bone spear'],

    # Necromancer curses.
    'amplify damage': [0],
    'dim vision': [6],
    'weaken': [6, 'amplify damage'],
    'iron maiden': [12, 'amplify damage'],
    'terror': [12, 'weaken'],
    'confuse': [18, 'dim vision'],
    'life tap': [18, 'iron maiden'],
    'attract': [24, 'confuse'],
    'decrepify': [24, 'terror'],
    'lower resist': [30, 'life tap', 'decrepify'],

    # Druid elemental.
    'firestorm': [0],
    'molten boulder': [6, 'firestorm'],
    'arctic blast': [6],
    'fissure': [12, 'molten boulder'],
    'cyclone armor': [12, 'arctic blast'],
    'twister': [18, 'cyclone armor'],
    'volcano': [24, 'fissure'],
    'tornado': [24, 'twister'],
    'armageddon': [30, 'hurricane', 'volcano'],
    'hurricane': [30, 'tornado'],

    # Druid shape shifting.
    'werewolf': [0],
    'lycanthropy': [0, 'werewolf'],
    'werebear': [6],
    'feral rage': [12, 'werewolf'],
    'maul': [12, 'werebear'],
    'rabies': [18, 'feral rage'],
    'fire claws': [18, 'feral rage', 'maul'],
    'hunger': [24, 'fire claws'],
    'shock wave': [24, 'maul'],
    'fury': [30, 'rabies'],

    # Druid summoning.
    'raven': [0],
    'poison creeper': [0],
    'oak sage': [6],
    'summon spirit wolf': [6, 'raven'],
    'carrion vine': [12, 'poison creeper'],
    'heart of wolverine': [18, 'oak sage'],
    'summon dire wolf': [18, 'oak sage', 'summon spirit wolf'],
    'solar creeper': [24, 'carrion vine'],
    'spirit of barbs': [30, 'heart of wolverine'],
    'summon grizzly': [30, 'summon dire wolf'],

    # Assassin martial arts.
    'tiger strike': [0],
    'dragon talon': [0],
    'fists of fire': [6],
    'dragon claw': [6, 'dragon talon'],
    'cobra strike': [12, 'tiger strike'],
    'claws of thunder': [18, 'fists of fire'],
    'dragon tail': [18, 'dragon claw'],
    'blades of ice': [24, 'claws of thunder'],
    'dragon flight': [24, 'dragon tail'],
    'phoenix strike': [24, 'blades of ice', 'cobra strike'],

    # Assassin shadow disciplines.
    'claw mastery': [0],
    'psychic hammer': [0],
    'burst of speed': [6, 'claw mastery'],
    'weapon block': [12, 'claw mastery'],
    'cloak of shadows': [12, 'psychic hammer'],
    'fade': [18, 'burst of speed'],
    'shadow warrior': [18, 'weapon block', 'cloak of shadows'],
    'mind blast': [24, 'cloak of shadows'],
    'venom': [30, 'fade'],
    'shadow master': [30, 'shadow warrior'],

    # Assassin traps.
    'fire blast': [0],
    'shock web': [6, 'fire blast'],
    'blade sentinel': [6],
    'charged bolt sentry': [12, 'shock web'],
    'wake of fire': [12, 'fire blast'],
    'blade fury': [18, 'blade sentinel', 'wake of fire'],
    'lightning sentry': [24, 'charged bolt sentry'],
    'wake of inferno': [24, 'wake of fire'],
    'death sentry': [30, 'lightning sentry'],
    'blade shield': [30, 'blade fury'],

    # Amazon javelin and spear skills.
    'jab': [0],
    'power strike': [6, 'jab'],
    'poison javelin': [6],
    'impale': [12, 'jab'],
    'lightning bolt': [12, 'poison javelin'],
    'charged strike': [18, 'power strike', 'lightning bolt'],
    'plague javelin': [18, 'lightning bolt'],
    'fend': [24, 'impale'],
    'lightning strike': [30, 'charged strike'],
    'lightning fury': [30, 'plague javelin'],

    # Amazon passive and magic skills.
    'inner sight': [0],
    'critical strike': [0],
    'dodge': [6],
    'slow missiles': [12, 'inner sight'],
    'avoid': [12, 'dodge'],
    'penetrate': [18, 'critical strike'],
    'decoy': [24, 'slow missiles'],
    'evade': [24, 'avoid'],
    'valkyrie': [30, 'decoy', 'evade'],
    'pierce': [30, 'penetrate'],

    # Amazon bow and crossbow skills.
    'magic arrow': [0],
    'fire arrow': [0],
    'cold arrow': [6],
    'multiple shot': [6, 'magic arrow'],
    'exploding arrow': [12, 'fire arrow', 'multiple shot'],
    'ice arrow': [18, 'cold arrow'],
    'guided arrow': [18, 'cold arrow', 'multiple shot'],
    'strafe': [24, 'guided arrow'],
    'immolation arrow': [24, 'exploding arrow'],
    'freezing arrow': [30, 'ice arrow'],
}

SKILL_NAME_TO_ID = {
    # Sorceress.
    'fire bolt': 36,
    'warmth': 37,
    'charged bolt': 38,
    'ice bolt': 39,
    'frozen armor': 40,
    'inferno': 41,
    'static field': 42,
    'telekinesis': 43,
    'frost nova': 44,
    'ice blast': 45,
    'blaze': 46,
    'fire ball': 47,
    'nova': 48,
    'lightning': 49,
    'shiver armor': 50,
    'fire wall': 51,
    'enchant': 52,
    'chain lightning': 53,
    'teleport': 54,
    'glacial spike': 55,
    'meteor': 56,
    'thunder storm': 57,
    'energy shield': 58,
    'blizzard': 59,
    'chilling armor': 60,
    'fire mastery': 61,
    'hydra': 62,
    'lightning mastery': 63,
    'frozen orb': 64,
    'cold mastery': 65,

    # Paladin.
    'sacrifice': 96,
    'smite': 97,
    'might': 98,
    'prayer': 99,
    'resist fire': 100,
    'holy bolt': 101,
    'holy fire': 102,
    'thorns': 103,
    'defiance': 104,
    'resist cold': 105,
    'zeal': 106,
    'charge': 107,
    'blessed aim': 108,
    'cleansing': 109,
    'resist lightning': 110,
    'vengeance': 111,
    'blessed hammer': 112,
    'concentration': 113,
    'holy freeze': 114,
    'vigor': 115,
    'conversion': 116,
    'holy shield': 117,
    'holy shock': 118,
    'sanctuary': 119,
    'meditation': 120,
    'fist of the heavens': 121,
    'fanaticism': 122,
    'conviction': 123,
    'redemption': 124,
    'salvation': 125,

    # Barbarian.
    'bash': 126,
    'sword mastery': 127,
    'axe mastery': 128,
    'mace mastery': 129,
    'howl': 130,
    'find potion': 131,
    'leap': 132,
    'double swing': 133,
    'pole arm mastery': 134,
    'throwing mastery': 135,
    'spear mastery': 136,
    'taunt': 137,
    'shout': 138,
    'stun': 139,
    'double throw': 140,
    'increased stamina': 141,
    'find item': 142,
    'leap attack': 143,
    'concentrate': 144,
    'iron skin': 145,
    'battle cry': 146,
    'frenzy': 147,
    'increased speed': 148,
    'battle orders': 149,
    'grim ward': 150,
    'whirlwind': 151,
    'berserk': 152,
    'natural resistance': 153,
    'war cry': 154,
    'battle command': 155,

    # Druid.
    'raven': 221,
    'poison creeper': 222,
    'werewolf': 223,
    'lycanthropy': 224,
    'firestorm': 225,
    'oak sage': 226,
    'summon spirit wolf': 227,
    'werebear': 228,
    'molten boulder': 229,
    'arctic blast': 230,
    'carrion vine': 231,
    'feral rage': 232,
    'maul': 233,
    'fissure': 234,
    'cyclone armor': 235,
    'heart of wolverine': 236,
    'summon dire wolf': 237,
    'rabies': 238,
    'fire claws': 239,
    'twister': 240,
    'solar creeper': 241,
    'hunger': 242,
    'shock wave': 243,
    'volcano': 244,
    'tornado': 245,
    'spirit of barbs': 246,
    'summon grizzly': 247,
    'fury': 248,
    'armageddon': 249,
    'hurricane': 250,

    # Necromancer.
    'amplify damage': 66,
    'teeth': 67,
    'bone armor': 68,
    'skeleton mastery': 69,
    'raise skeleton': 70,
    'dim vision': 71,
    'weaken': 72,
    'poison dagger': 73,
    'corpse explosion': 74,
    'clay golem': 75,
    'iron maiden': 76,
    'terror': 77,
    'bone wall': 78,
    'golem mastery': 79,
    'raise skeletal mage': 80,
    'confuse': 81,
    'life tap': 82,
    'poison explosion': 83,
    'bone spear': 84,
    'blood golem': 85,
    'attract': 86,
    'decrepify': 87,
    'bone prison': 88,
    'summon resist': 89,
    'iron golem': 90,
    'lower resist': 91,
    'poison nova': 92,
    'bone spirit': 93,
    'fire golem': 94,
    'revive': 95,

    # Assassin.
    'fire blast': 251,
    'claw mastery': 252,
    'psychic hammer': 253,
    'tiger strike': 254,
    'dragon talon': 255,
    'shock web': 256,
    'blade sentinel': 257,
    'burst of speed': 258,
    'fists of fire': 259,
    'dragon claw': 260,
    'charged bolt sentry': 261,
    'wake of fire': 262,
    'weapon block': 263,
    'cloak of shadows': 264,
    'cobra strike': 265,
    'blade fury': 266,
    'fade': 267,
    'shadow warrior': 268,
    'claws of thunder': 269,
    'dragon tail': 270,
    'lightning sentry': 271,
    'wake of inferno': 272,
    'mind blast': 273,
    'blades of ice': 274,
    'dragon flight': 275,
    'death sentry': 276,
    'blade shield': 277,
    'venom': 278,
    'shadow master': 279,
    'phoenix strike': 280,

    # Amazon.
    'magic arrow': 6,
    'fire arrow': 7,
    'inner sight': 8,
    'critical strike': 9,
    'jab': 10,
    'cold arrow': 11,
    'multiple shot': 12,
    'dodge': 13,
    'power strike': 14,
    'poison javelin': 15,
    'exploding arrow': 16,
    'slow missiles': 17,
    'avoid': 18,
    'impale': 19,
    'lightning bolt': 20,
    'ice arrow': 21,
    'guided arrow': 22,
    'penetrate': 23,
    'charged strike': 24,
    'plague javelin': 25,
    'strafe': 26,
    'immolation arrow': 27,
    'decoy': 28,
    'evade': 29,
    'fend': 30,
    'freezing arrow': 31,
    'valkyrie': 32,
    'pierce': 33,
    'lightning strike': 34,
    'lightning fury': 35,
}

SKILL_ID_TO_NAME = {v: k for k, v in SKILL_NAME_TO_ID.items()}

StatTarget = collections.namedtuple('StatTarget',
                                    ['stat', 'level', 'target_amount'])
SkillTarget = collections.namedtuple('SkillTarget',
                                     ['skill', 'target_amount', 'min_level'])


def _ltoi(index):
    """Level to index helper function."""
    return index - 2


def _stoi(stat_name):
    """Stat name to index helper function."""
    stat_name = stat_name.lower()
    if stat_name == 'strength':
        return 0
    if stat_name == 'energy':
        return 1
    if stat_name == 'dexterity':
        return 2
    if stat_name == 'vitality':
        return 3

    assert False, 'Bad stat'
    return -1


def plan_stats(class_name, plan):
    """Implement a stat plan."""
    stat_targets = []
    for entry in plan['targets']:
        stat_targets.append(
            StatTarget(entry['stat'], entry['level'], entry['target']))

    # Sort the plan so that earlier requirements can be computed first.
    stat_targets = sorted(stat_targets, key=lambda e: e.level)
    levelup_entries = [[-1] * 5 for _ in range(98)]
    for stat_target in stat_targets:
        stat = _stoi(stat_target.stat)
        target = stat_target.target_amount
        level_index = _ltoi(stat_target.level)

        # Determine how many stat points actually have to be distributed.
        base = BASE_STATS[class_name][stat]
        requirement = target - base
        for entry in levelup_entries[:level_index]:
            for stat_entry in entry:
                if stat_entry == stat:
                    requirement -= 1

        if requirement <= 0:
            continue

        # Update the plan from the required level down.
        while level_index >= 0 and requirement > 0:
            for i, stat_entry in enumerate(levelup_entries[level_index]):
                if stat_entry == -1:
                    levelup_entries[level_index][i] = stat
                    requirement -= 1
                    if requirement <= 0:
                        break

            level_index -= 1

        assert requirement <= 0, 'Impossible plan. Failed on: ' + str(
            stat_target)

    # Fill in unused stats with the default value.
    default = _stoi(plan['default'])
    for levelup_entry in levelup_entries:
        for i, stat_entry in enumerate(levelup_entry):
            if stat_entry == -1:
                levelup_entry[i] = default

    return levelup_entries


def plan_skills(plan):
    """Implement a skill plan."""

    def _get_skill(skill_target):
        if acquired_skills[skill_target.skill] >= skill_target.target_amount:
            return -1

        # Intentionally delay requirements for skills we delay explicitly.
        if level < skill_target.min_level:
            return -1

        requirements = SKILL_REQUIREMENTS[skill_target.skill]
        required_level, requirements = requirements[0], requirements[1:]

        requirements_met = True
        for requirement in requirements:
            if acquired_skills[requirement] == 0:
                result = _get_skill(SkillTarget(requirement, 1, 0))
                if result != -1:
                    return result

                # Try to meet other requirements before giving up.
                requirements_met = False

        if not requirements_met:
            return -1

        if level < required_level:
            return -1

        acquired_skills[skill_target.skill] += 1
        SKILL_REQUIREMENTS[skill_target.skill][0] += 1
        return SKILL_NAME_TO_ID[skill_target.skill]

    skill_targets = []
    for entry in plan:
        skill_targets.append(
            SkillTarget(entry['skill'], entry['target'],
                        entry.get('min_level', 0)))

    skills = []
    acquired_skills = collections.defaultdict(int)
    saved_points = 0

    for level in range(2, 100):
        current_levelup = []
        saved_points += 1

        # Find the first unmet requirement that we can actually level.
        while saved_points > 0:
            result = -1

            for skill_target in skill_targets:
                result = _get_skill(skill_target)
                if result != -1:
                    break

            if result == -1:
                break

            current_levelup.append(result)
            saved_points -= 1

        skills.append(current_levelup)

    return skills


def main(argv):
    """Execute a plan based on a json config file."""
    if not argv:
        print('Missing config file argument.')
        sys.exit(1)

    # Load the config.
    config = json.load(open(argv[0]))

    # Parse the stat-specific stuff.
    class_name = config['class']
    stat_plan = config['stat_priority']
    stats_by_level = plan_stats(class_name, stat_plan)
    skills_by_level = plan_skills(config['skill_priority'])

    # Load the template.
    data = open(config['template']).read()
    for level in range(2, 100):
        index = _ltoi(level)

        data = data.replace('%%%SKILL{}%%%'.format(level),
                            str(skills_by_level[index]))
        data = data.replace('%%%STAT{}%%%'.format(level),
                            str(stats_by_level[index]))
        skill_comment = ', '.join(
            [SKILL_ID_TO_NAME[skill] for skill in skills_by_level[index]])
        if not skill_comment:
            skill_comment = 'save point'
        data = data.replace('%%%COMMENT{}%%%'.format(level), skill_comment)

    print(data)


if __name__ == '__main__':
    main(sys.argv[1:])
