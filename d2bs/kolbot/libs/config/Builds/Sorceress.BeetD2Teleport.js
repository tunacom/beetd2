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

      Config.AttackSkill = [-1, 36, -1, 36, -1, -1, -1];
      Config.LowManaSkill = [0, 0];
    }
  },

  2:  {
    SkillPoints: [39],  // ice bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      Config.AttackSkill = [-1, 39, -1, 39, -1, -1, -1];
    }
  },

  3:  {
    SkillPoints: [37],  // warmth
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  4:  {
    SkillPoints: [40],  // frozen armor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  5:  {
    SkillPoints: [38],  // charged bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  6:  {
    SkillPoints: [42],  // static field
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.StaticList = ["Andariel", "Duriel", "Mephisto", "Diablo", "Baal", "Izual"];
    }
  },

  7:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  8:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  9:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  10:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  11:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  12:  {
    SkillPoints: [49],  // lightning
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/teleport.nip", "beetd2/low_level_additions.nip"];
    }
  },

  13:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  14:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  15:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  16:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  17:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  18:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  19:  {
    SkillPoints: [53],  // chain lightning
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  20:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  21:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  22:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  23:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  24:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  25:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  26:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  27:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  28:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  29:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  30:  {
    SkillPoints: [54],  // teleport
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  31:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  32:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  33:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  34:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  35:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  36:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  37:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  38:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  39:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  40:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/teleport.nip"];
    }
  },

  41:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  42:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  43:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  44:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  45:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  46:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  47:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  48:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  49:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  50:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  51:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  52:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  53:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  54:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  55:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [0, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  56:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  57:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  58:  {
    SkillPoints: [58],  // energy shield
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  59:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  60:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  61:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  62:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  63:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  64:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  65:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  66:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  67:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  68:  {
    SkillPoints: [43],  // telekinesis
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  69:  {
    SkillPoints: [],  // save point
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  70:  {
    SkillPoints: [],  // save point
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  71:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  72:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  73:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  74:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  75:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  76:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  77:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  78:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  79:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  80:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  81:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  82:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  83:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  84:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  85:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  86:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  87:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  88:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  89:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  90:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  91:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  92:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  93:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  94:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  95:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  96:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  97:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  98:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  99:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  }

};
