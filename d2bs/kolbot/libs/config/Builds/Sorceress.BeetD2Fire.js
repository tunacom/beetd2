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
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {

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
    SkillPoints: [36],  // fire bolt
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
    SkillPoints: [36],  // fire bolt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  8:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  9:  {
    SkillPoints: [36],  // fire bolt
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
    SkillPoints: [41],  // inferno
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  12:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/fire.nip", "beetd2/low_level_additions.nip"];
      Config.AttackSkill = [-1, 47, -1, 47, -1, -1, -1];
    }
  },

  13:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  14:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  15:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  16:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  17:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  18:  {
    SkillPoints: [54],  // teleport
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.LowManaSkill = [-1, -1];
    }
  },

  19:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  20:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  21:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  22:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  23:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  24:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  25:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  26:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  27:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  28:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  29:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  30:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  31:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  32:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  33:  {
    SkillPoints: [47],  // fire ball
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  34:  {
    SkillPoints: [46],  // blaze
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  35:  {
    SkillPoints: [51],  // fire wall
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  36:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  37:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  38:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  39:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  40:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/fire.nip"];
      Config.AttackSkill = [-1, 56, 47, 56, 47, -1, -1];
    }
  },

  41:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  42:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  43:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  44:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  45:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  46:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  47:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  48:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  49:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  50:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  51:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  52:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  53:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  54:  {
    SkillPoints: [56],  // meteor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  55:  {
    SkillPoints: [56],  // meteor
    StatPoints: [0, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  56:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  57:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  58:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  59:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  60:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  61:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  62:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  63:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  64:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  65:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  66:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  67:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  68:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  69:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  70:  {
    SkillPoints: [36],  // fire bolt
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  71:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  72:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  73:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  74:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  75:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  76:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  77:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  78:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  79:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  80:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  81:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  82:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  83:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  84:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  85:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  86:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  87:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  88:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  89:  {
    SkillPoints: [61],  // fire mastery
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  90:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  91:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  92:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  93:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  94:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  95:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  96:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  97:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  98:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  99:  {
    SkillPoints: [37],  // warmth
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  }

};
