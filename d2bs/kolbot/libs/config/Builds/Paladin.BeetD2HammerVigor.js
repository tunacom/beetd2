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
if (!isIncluded("common/BeetD2Config.js")) { include("common/BeetD2Config.js"); print("included"); };

var AutoBuildTemplate = {

  1:  {  
    Update: function () {
      BeetD2Config.fixConfiguration();

      // Class specific configuration.
      Config.Vigor = true;
      Config.Charge = false;

      Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1];
      Config.LowManaSkill = [-1, -1];
    }
  },

  2:  {
    SkillPoints: [97],  // smite
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.AttackSkill = [-1, 0, -1, 0, -1, -1, -1];
    }
  },

  3:  {
    SkillPoints: [99],  // prayer
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  4:  {
    SkillPoints: [98],  // might
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      Config.AttackSkill = [-1, 0, 98, 0, 98, -1, -1];
    }
  },

  5:  {
    SkillPoints: [99],  // prayer
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  6:  {
    SkillPoints: [101],  // holy bolt
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  7:  {
    SkillPoints: [104],  // defiance
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  8:  {
    SkillPoints: [99],  // prayer
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  9:  {
    SkillPoints: [99],  // prayer
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  10:  {
    SkillPoints: [99],  // prayer
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  11:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  12:  {
    SkillPoints: [107],  // charge
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/hammer.nip", "beetd2/low_level_additions.nip"];
    }
  },

  13:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.AttackSkill = [-1, 0, 109, 0, 109, -1, -1];
    }
  },

  14:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  15:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  16:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  17:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  18:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.AttackSkill = [-1, 112, 109, 112, 109, -1, -1];
      Config.LowManaSkill = [0, 109];
    }
  },

  19:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  20:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  21:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  22:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  23:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  24:  {
    SkillPoints: [117],  // holy shield
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      Config.LowManaSkill = [-1, -1];
    }
  },

  25:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  26:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  27:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  28:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  29:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  30:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  31:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  32:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  33:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  34:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  35:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  36:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  37:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  38:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  39:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  40:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/hammer.nip"];
    }
  },

  41:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  42:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  43:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  44:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  45:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  46:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  47:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  48:  {
    SkillPoints: [112],  // blessed hammer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  49:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  50:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  51:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  52:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  53:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  54:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  55:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  56:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  57:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  58:  {
    SkillPoints: [109],  // cleansing
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  59:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  60:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  61:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  62:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  63:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  64:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  65:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  66:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  67:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  68:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  69:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  70:  {
    SkillPoints: [115],  // vigor
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  71:  {
    SkillPoints: [115],  // vigor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  72:  {
    SkillPoints: [115],  // vigor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  73:  {
    SkillPoints: [115],  // vigor
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  74:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  75:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  76:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  77:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  78:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  79:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  80:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  81:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  82:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  83:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  84:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  85:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  86:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  87:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  88:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  89:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  90:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  91:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  92:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  93:  {
    SkillPoints: [108],  // blessed aim
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  94:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  95:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  96:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  97:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  98:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  99:  {
    SkillPoints: [99],  // prayer
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  }

};
