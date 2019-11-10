/**
* Skill IDs:  See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs:
*
*   Strength  = 0
*   Energy    = 1
*   Dexterity  = 2
*   Vitality  = 3
*
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };
if (!isIncluded("common/BeetD2Config.js")) { include("common/BeetD2Config.js"); };

var AutoBuildTemplate = {

  1:  {  
    Update: function () {
      BeetD2Config.fixConfiguration();

      Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1];
      Config.LowManaSkill = [-1, -1];
    }
  },

  2:  {
    SkillPoints: %%%SKILL2%%%,  // %%%COMMENT2%%%
    StatPoints: %%%STAT2%%%,
    Update: function () {
      Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1];
      Config.LowManaSkill = [0, 0];
    }
  },

  3:  {
    SkillPoints: %%%SKILL3%%%,  // %%%COMMENT3%%%
    StatPoints: %%%STAT3%%%,
    Update: function () {
      
    }
  },

  4:  {
    SkillPoints: %%%SKILL4%%%,  // %%%COMMENT4%%%
    StatPoints: %%%STAT4%%%,
    Update: function () {
      
    }
  },

  5:  {
    SkillPoints: %%%SKILL5%%%,  // %%%COMMENT5%%%
    StatPoints: %%%STAT5%%%,
    Update: function () {
      
    }
  },

  6:  {
    SkillPoints: %%%SKILL6%%%,  // %%%COMMENT6%%%
    StatPoints: %%%STAT6%%%,
    Update: function () {
      
    }
  },

  7:  {
    SkillPoints: %%%SKILL7%%%,  // %%%COMMENT7%%%
    StatPoints: %%%STAT7%%%,
    Update: function () {
      
    }
  },

  8:  {
    SkillPoints: %%%SKILL8%%%,  // %%%COMMENT8%%%
    StatPoints: %%%STAT8%%%,
    Update: function () {
      
    }
  },

  9:  {
    SkillPoints: %%%SKILL9%%%,  // %%%COMMENT9%%%
    StatPoints: %%%STAT9%%%,
    Update: function () {
      
    }
  },

  10:  {
    SkillPoints: %%%SKILL10%%%,  // %%%COMMENT10%%%
    StatPoints: %%%STAT10%%%,
    Update: function () {
      
    }
  },

  11:  {
    SkillPoints: %%%SKILL11%%%,  // %%%COMMENT11%%%
    StatPoints: %%%STAT11%%%,
    Update: function () {
      
    }
  },

  12:  {
    SkillPoints: %%%SKILL12%%%,  // %%%COMMENT12%%%
    StatPoints: %%%STAT12%%%,
    Update: function () {
        Config.PickitFiles = ["beetd2/runes.nip", "beetd2/hammer_12.nip"];
    }
  },

  13:  {
    SkillPoints: %%%SKILL13%%%,  // %%%COMMENT13%%%
    StatPoints: %%%STAT13%%%,
    Update: function () {
      
    }
  },

  14:  {
    SkillPoints: %%%SKILL14%%%,  // %%%COMMENT14%%%
    StatPoints: %%%STAT14%%%,
    Update: function () {
      
    }
  },

  15:  {
    SkillPoints: %%%SKILL15%%%,  // %%%COMMENT15%%%
    StatPoints: %%%STAT15%%%,
    Update: function () {
      
    }
  },

  16:  {
    SkillPoints: %%%SKILL16%%%,  // %%%COMMENT16%%%
    StatPoints: %%%STAT16%%%,
    Update: function () {
      
    }
  },

  17:  {
    SkillPoints: %%%SKILL17%%%,  // %%%COMMENT17%%%
    StatPoints: %%%STAT17%%%,
    Update: function () {
      
    }
  },

  18:  {
    SkillPoints: %%%SKILL18%%%,  // %%%COMMENT18%%%
    StatPoints: %%%STAT18%%%,
    Update: function () {
      
    }
  },

  19:  {
    SkillPoints: %%%SKILL19%%%,  // %%%COMMENT19%%%
    StatPoints: %%%STAT19%%%,
    Update: function () {
      
    }
  },

  20:  {
    SkillPoints: %%%SKILL20%%%,  // %%%COMMENT20%%%
    StatPoints: %%%STAT20%%%,
    Update: function () {
      
    }
  },

  21:  {
    SkillPoints: %%%SKILL21%%%,  // %%%COMMENT21%%%
    StatPoints: %%%STAT21%%%,
    Update: function () {
      
    }
  },

  22:  {
    SkillPoints: %%%SKILL22%%%,  // %%%COMMENT22%%%
    StatPoints: %%%STAT22%%%,
    Update: function () {
      
    }
  },

  23:  {
    SkillPoints: %%%SKILL23%%%,  // %%%COMMENT23%%%
    StatPoints: %%%STAT23%%%,
    Update: function () {
      
    }
  },

  24:  {
    SkillPoints: %%%SKILL24%%%,  // %%%COMMENT24%%%
    StatPoints: %%%STAT24%%%,
    Update: function () {
      
    }
  },

  25:  {
    SkillPoints: %%%SKILL25%%%,  // %%%COMMENT25%%%
    StatPoints: %%%STAT25%%%,
    Update: function () {
      
    }
  },

  26:  {
    SkillPoints: %%%SKILL26%%%,  // %%%COMMENT26%%%
    StatPoints: %%%STAT26%%%,
    Update: function () {
      
    }
  },

  27:  {
    SkillPoints: %%%SKILL27%%%,  // %%%COMMENT27%%%
    StatPoints: %%%STAT27%%%,
    Update: function () {
      
    }
  },

  28:  {
    SkillPoints: %%%SKILL28%%%,  // %%%COMMENT28%%%
    StatPoints: %%%STAT28%%%,
    Update: function () {
      
    }
  },

  29:  {
    SkillPoints: %%%SKILL29%%%,  // %%%COMMENT29%%%
    StatPoints: %%%STAT29%%%,
    Update: function () {
      
    }
  },

  30:  {
    SkillPoints: %%%SKILL30%%%,  // %%%COMMENT30%%%
    StatPoints: %%%STAT30%%%,
    Update: function () {
      
    }
  },

  31:  {
    SkillPoints: %%%SKILL31%%%,  // %%%COMMENT31%%%
    StatPoints: %%%STAT31%%%,
    Update: function () {
      
    }
  },

  32:  {
    SkillPoints: %%%SKILL32%%%,  // %%%COMMENT32%%%
    StatPoints: %%%STAT32%%%,
    Update: function () {
      
    }
  },

  33:  {
    SkillPoints: %%%SKILL33%%%,  // %%%COMMENT33%%%
    StatPoints: %%%STAT33%%%,
    Update: function () {
      
    }
  },

  34:  {
    SkillPoints: %%%SKILL34%%%,  // %%%COMMENT34%%%
    StatPoints: %%%STAT34%%%,
    Update: function () {
      
    }
  },

  35:  {
    SkillPoints: %%%SKILL35%%%,  // %%%COMMENT35%%%
    StatPoints: %%%STAT35%%%,
    Update: function () {
      
    }
  },

  36:  {
    SkillPoints: %%%SKILL36%%%,  // %%%COMMENT36%%%
    StatPoints: %%%STAT36%%%,
    Update: function () {
      
    }
  },

  37:  {
    SkillPoints: %%%SKILL37%%%,  // %%%COMMENT37%%%
    StatPoints: %%%STAT37%%%,
    Update: function () {
      
    }
  },

  38:  {
    SkillPoints: %%%SKILL38%%%,  // %%%COMMENT38%%%
    StatPoints: %%%STAT38%%%,
    Update: function () {
      
    }
  },

  39:  {
    SkillPoints: %%%SKILL39%%%,  // %%%COMMENT39%%%
    StatPoints: %%%STAT39%%%,
    Update: function () {
      
    }
  },

  40:  {
    SkillPoints: %%%SKILL40%%%,  // %%%COMMENT40%%%
    StatPoints: %%%STAT40%%%,
    Update: function () {
      
    }
  },

  41:  {
    SkillPoints: %%%SKILL41%%%,  // %%%COMMENT41%%%
    StatPoints: %%%STAT41%%%,
    Update: function () {
      
    }
  },

  42:  {
    SkillPoints: %%%SKILL42%%%,  // %%%COMMENT42%%%
    StatPoints: %%%STAT42%%%,
    Update: function () {
      
    }
  },

  43:  {
    SkillPoints: %%%SKILL43%%%,  // %%%COMMENT43%%%
    StatPoints: %%%STAT43%%%,
    Update: function () {
      
    }
  },

  44:  {
    SkillPoints: %%%SKILL44%%%,  // %%%COMMENT44%%%
    StatPoints: %%%STAT44%%%,
    Update: function () {
      
    }
  },

  45:  {
    SkillPoints: %%%SKILL45%%%,  // %%%COMMENT45%%%
    StatPoints: %%%STAT45%%%,
    Update: function () {
      
    }
  },

  46:  {
    SkillPoints: %%%SKILL46%%%,  // %%%COMMENT46%%%
    StatPoints: %%%STAT46%%%,
    Update: function () {
      
    }
  },

  47:  {
    SkillPoints: %%%SKILL47%%%,  // %%%COMMENT47%%%
    StatPoints: %%%STAT47%%%,
    Update: function () {
      
    }
  },

  48:  {
    SkillPoints: %%%SKILL48%%%,  // %%%COMMENT48%%%
    StatPoints: %%%STAT48%%%,
    Update: function () {
      
    }
  },

  49:  {
    SkillPoints: %%%SKILL49%%%,  // %%%COMMENT49%%%
    StatPoints: %%%STAT49%%%,
    Update: function () {
      
    }
  },

  50:  {
    SkillPoints: %%%SKILL50%%%,  // %%%COMMENT50%%%
    StatPoints: %%%STAT50%%%,
    Update: function () {
      
    }
  },

  51:  {
    SkillPoints: %%%SKILL51%%%,  // %%%COMMENT51%%%
    StatPoints: %%%STAT51%%%,
    Update: function () {
      
    }
  },

  52:  {
    SkillPoints: %%%SKILL52%%%,  // %%%COMMENT52%%%
    StatPoints: %%%STAT52%%%,
    Update: function () {
      
    }
  },

  53:  {
    SkillPoints: %%%SKILL53%%%,  // %%%COMMENT53%%%
    StatPoints: %%%STAT53%%%,
    Update: function () {
      
    }
  },

  54:  {
    SkillPoints: %%%SKILL54%%%,  // %%%COMMENT54%%%
    StatPoints: %%%STAT54%%%,
    Update: function () {
      
    }
  },

  55:  {
    SkillPoints: %%%SKILL55%%%,  // %%%COMMENT55%%%
    StatPoints: %%%STAT55%%%,
    Update: function () {
      
    }
  },

  56:  {
    SkillPoints: %%%SKILL56%%%,  // %%%COMMENT56%%%
    StatPoints: %%%STAT56%%%,
    Update: function () {
      
    }
  },

  57:  {
    SkillPoints: %%%SKILL57%%%,  // %%%COMMENT57%%%
    StatPoints: %%%STAT57%%%,
    Update: function () {
      
    }
  },

  58:  {
    SkillPoints: %%%SKILL58%%%,  // %%%COMMENT58%%%
    StatPoints: %%%STAT58%%%,
    Update: function () {
      
    }
  },

  59:  {
    SkillPoints: %%%SKILL59%%%,  // %%%COMMENT59%%%
    StatPoints: %%%STAT59%%%,
    Update: function () {
      
    }
  },

  60:  {
    SkillPoints: %%%SKILL60%%%,  // %%%COMMENT60%%%
    StatPoints: %%%STAT60%%%,
    Update: function () {
      
    }
  },

  61:  {
    SkillPoints: %%%SKILL61%%%,  // %%%COMMENT61%%%
    StatPoints: %%%STAT61%%%,
    Update: function () {
      
    }
  },

  62:  {
    SkillPoints: %%%SKILL62%%%,  // %%%COMMENT62%%%
    StatPoints: %%%STAT62%%%,
    Update: function () {
      
    }
  },

  63:  {
    SkillPoints: %%%SKILL63%%%,  // %%%COMMENT63%%%
    StatPoints: %%%STAT63%%%,
    Update: function () {
      
    }
  },

  64:  {
    SkillPoints: %%%SKILL64%%%,  // %%%COMMENT64%%%
    StatPoints: %%%STAT64%%%,
    Update: function () {
      
    }
  },

  65:  {
    SkillPoints: %%%SKILL65%%%,  // %%%COMMENT65%%%
    StatPoints: %%%STAT65%%%,
    Update: function () {
      
    }
  },

  66:  {
    SkillPoints: %%%SKILL66%%%,  // %%%COMMENT66%%%
    StatPoints: %%%STAT66%%%,
    Update: function () {
      
    }
  },

  67:  {
    SkillPoints: %%%SKILL67%%%,  // %%%COMMENT67%%%
    StatPoints: %%%STAT67%%%,
    Update: function () {
      
    }
  },

  68:  {
    SkillPoints: %%%SKILL68%%%,  // %%%COMMENT68%%%
    StatPoints: %%%STAT68%%%,
    Update: function () {
      
    }
  },

  69:  {
    SkillPoints: %%%SKILL69%%%,  // %%%COMMENT69%%%
    StatPoints: %%%STAT69%%%,
    Update: function () {
      
    }
  },

  70:  {
    SkillPoints: %%%SKILL70%%%,  // %%%COMMENT70%%%
    StatPoints: %%%STAT70%%%,
    Update: function () {
      
    }
  },

  71:  {
    SkillPoints: %%%SKILL71%%%,  // %%%COMMENT71%%%
    StatPoints: %%%STAT71%%%,
    Update: function () {
      
    }
  },

  72:  {
    SkillPoints: %%%SKILL72%%%,  // %%%COMMENT72%%%
    StatPoints: %%%STAT72%%%,
    Update: function () {
      
    }
  },

  73:  {
    SkillPoints: %%%SKILL73%%%,  // %%%COMMENT73%%%
    StatPoints: %%%STAT73%%%,
    Update: function () {
      
    }
  },

  74:  {
    SkillPoints: %%%SKILL74%%%,  // %%%COMMENT74%%%
    StatPoints: %%%STAT74%%%,
    Update: function () {
      
    }
  },

  75:  {
    SkillPoints: %%%SKILL75%%%,  // %%%COMMENT75%%%
    StatPoints: %%%STAT75%%%,
    Update: function () {
      
    }
  },

  76:  {
    SkillPoints: %%%SKILL76%%%,  // %%%COMMENT76%%%
    StatPoints: %%%STAT76%%%,
    Update: function () {
      
    }
  },

  77:  {
    SkillPoints: %%%SKILL77%%%,  // %%%COMMENT77%%%
    StatPoints: %%%STAT77%%%,
    Update: function () {
      
    }
  },

  78:  {
    SkillPoints: %%%SKILL78%%%,  // %%%COMMENT78%%%
    StatPoints: %%%STAT78%%%,
    Update: function () {
      
    }
  },

  79:  {
    SkillPoints: %%%SKILL79%%%,  // %%%COMMENT79%%%
    StatPoints: %%%STAT79%%%,
    Update: function () {
      
    }
  },

  80:  {
    SkillPoints: %%%SKILL80%%%,  // %%%COMMENT80%%%
    StatPoints: %%%STAT80%%%,
    Update: function () {
      
    }
  },

  81:  {
    SkillPoints: %%%SKILL81%%%,  // %%%COMMENT81%%%
    StatPoints: %%%STAT81%%%,
    Update: function () {
      
    }
  },

  82:  {
    SkillPoints: %%%SKILL82%%%,  // %%%COMMENT82%%%
    StatPoints: %%%STAT82%%%,
    Update: function () {
      
    }
  },

  83:  {
    SkillPoints: %%%SKILL83%%%,  // %%%COMMENT83%%%
    StatPoints: %%%STAT83%%%,
    Update: function () {
      
    }
  },

  84:  {
    SkillPoints: %%%SKILL84%%%,  // %%%COMMENT84%%%
    StatPoints: %%%STAT84%%%,
    Update: function () {
      
    }
  },

  85:  {
    SkillPoints: %%%SKILL85%%%,  // %%%COMMENT85%%%
    StatPoints: %%%STAT85%%%,
    Update: function () {
      
    }
  },

  86:  {
    SkillPoints: %%%SKILL86%%%,  // %%%COMMENT86%%%
    StatPoints: %%%STAT86%%%,
    Update: function () {
      
    }
  },

  87:  {
    SkillPoints: %%%SKILL87%%%,  // %%%COMMENT87%%%
    StatPoints: %%%STAT87%%%,
    Update: function () {
      
    }
  },

  88:  {
    SkillPoints: %%%SKILL88%%%,  // %%%COMMENT88%%%
    StatPoints: %%%STAT88%%%,
    Update: function () {
      
    }
  },

  89:  {
    SkillPoints: %%%SKILL89%%%,  // %%%COMMENT89%%%
    StatPoints: %%%STAT89%%%,
    Update: function () {
      
    }
  },

  90:  {
    SkillPoints: %%%SKILL90%%%,  // %%%COMMENT90%%%
    StatPoints: %%%STAT90%%%,
    Update: function () {
      
    }
  },

  91:  {
    SkillPoints: %%%SKILL91%%%,  // %%%COMMENT91%%%
    StatPoints: %%%STAT91%%%,
    Update: function () {
      
    }
  },

  92:  {
    SkillPoints: %%%SKILL92%%%,  // %%%COMMENT92%%%
    StatPoints: %%%STAT92%%%,
    Update: function () {
      
    }
  },

  93:  {
    SkillPoints: %%%SKILL93%%%,  // %%%COMMENT93%%%
    StatPoints: %%%STAT93%%%,
    Update: function () {
      
    }
  },

  94:  {
    SkillPoints: %%%SKILL94%%%,  // %%%COMMENT94%%%
    StatPoints: %%%STAT94%%%,
    Update: function () {
      
    }
  },

  95:  {
    SkillPoints: %%%SKILL95%%%,  // %%%COMMENT95%%%
    StatPoints: %%%STAT95%%%,
    Update: function () {
      
    }
  },

  96:  {
    SkillPoints: %%%SKILL96%%%,  // %%%COMMENT96%%%
    StatPoints: %%%STAT96%%%,
    Update: function () {
      
    }
  },

  97:  {
    SkillPoints: %%%SKILL97%%%,  // %%%COMMENT97%%%
    StatPoints: %%%STAT97%%%,
    Update: function () {
      
    }
  },

  98:  {
    SkillPoints: %%%SKILL98%%%,  // %%%COMMENT98%%%
    StatPoints: %%%STAT98%%%,
    Update: function () {
      
    }
  },

  99:  {
    SkillPoints: %%%SKILL99%%%,  // %%%COMMENT99%%%
    StatPoints: %%%STAT99%%%,
    Update: function () {
      
    }
  }

};