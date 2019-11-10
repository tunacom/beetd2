"""Install or update BeetD2."""
import json
import os
import shutil
import sys

CHARACTER_TEMPLATE = """  // Boilerplate.
  Config.BeetD2 = {{ AreaList: [], "Minions": false }};

  // Shared configuration.
  Config.Leader = "{leader}";
  Config.PublicMode = Config.Leader === "" ? 3 : 2;
  Config.QuitList = {character_list};

  Config.AutoBuild.Template = "{build}";
  Config.AutoBuild.Enabled = Config.AutoBuild.Template == "" ? false : true;

  // Scripts.
  Scripts.UserAddon = false;
  {script_data}
"""


def main(argv):
    """Main function."""
    if not argv:
        print('Missing config file argument.')
        sys.exit(1)

    config = json.load(open(argv[0]))

    # Copy Beetd2 scripts into the target directory.
    script_base = os.path.join(os.path.dirname(__file__), 'd2bs')
    for prefix, _, files in os.walk(script_base):
        for filename in files:
            source_file = os.path.join(os.path.dirname(__file__), prefix,
                                       filename)
            target_file = os.path.join(config['kolbot_path'], prefix, filename)
            try:
                os.makedirs(os.path.dirname(target_file))
            except FileExistsError:
                pass

            shutil.copy(source_file, target_file)

    # Shared for all templates.
    config_dir = os.path.join(config['kolbot_path'], 'd2bs', 'kolbot', 'libs',
                              'config')
    character_list = repr([
        c['character_name']
        for c in config['characters']
        if not c.get('disabled')
    ])
    script_data = open(os.path.join(config['templates_path'],
                                    config['script'])).read()

    # Prepare character templates.
    for character in config['characters']:
        if character.get('disabled'):
            continue

        leader = '' if character['character_name'] == config[
            'leader'] else config['leader']
        template = CHARACTER_TEMPLATE.format(leader=leader,
                                             character_list=character_list,
                                             build=character['build'],
                                             script_data=script_data)

        base = '{}.js'.format(character['class'])
        character_data = open(os.path.join(config['templates_path'],
                                           base)).read()
        character_data = character_data.replace('%%%TEMPLATE%%%', template)

        out = '{}.{}.js'.format(character['class'], character['profile_name'])
        with open(os.path.join(config_dir, out), 'w') as handle:
            handle.write(character_data)


if __name__ == '__main__':
    main(sys.argv[1:])
