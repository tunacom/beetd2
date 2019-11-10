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

      Config.AttackSkill = [-1, 0, -1, 0, -1];
      Config.LowManaSkill = [-1];
    }
  },

  2:  {
    SkillPoints: [130],  // howl
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.AttackSkill = [130, 0, -1, 0, -1];
    }
  },

  3:  {
    SkillPoints: [131],  // find potion
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  4:  {
    SkillPoints: [],  // save point
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  5:  {
    SkillPoints: [],  // save point
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  6:  {
    SkillPoints: [137, 138, 132],  // taunt, shout, leap
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      Config.AttackSkill = [137, 0, -1, 0, -1];
    }
  },

  7:  {
    SkillPoints: [138],  // shout
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  8:  {
    SkillPoints: [138],  // shout
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  9:  {
    SkillPoints: [138],  // shout
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      
    }
  },

  10:  {
    SkillPoints: [138],  // shout
    StatPoints: [1, 1, 1, 1, 1],
    Update: function () {
      Config.AttackSkill = [-1, 0, -1, 137, -1];
      Config.LowManaSkill = [0];
    }
  },

  11:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  12:  {
    SkillPoints: [141],  // increased stamina
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/shout.nip", "beetd2/low_level_additions.nip"];
    }
  },

  13:  {
    SkillPoints: [142],  // find item
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  14:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  15:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  16:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  17:  {
    SkillPoints: [138],  // shout
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  18:  {
    SkillPoints: [146],  // battle cry
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  19:  {
    SkillPoints: [143],  // leap attack
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  20:  {
    SkillPoints: [145],  // iron skin
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  21:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  22:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  23:  {
    SkillPoints: [138],  // shout
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  24:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  25:  {
    SkillPoints: [148],  // increased speed
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  26:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  27:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  28:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  29:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      
    }
  },

  30:  {
    SkillPoints: [154],  // war cry
    StatPoints: [0, 0, 0, 0, 0],
    Update: function () {
      Config.AttackSkill = [137, 154, -1, 154, -1];      
    }
  },

  31:  {
    SkillPoints: [153],  // natural resistance
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  32:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  33:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  34:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  35:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  36:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  37:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  38:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  39:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  40:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      Config.FindItem = true;
      Config.PickitFiles = ["beetd2/tuna.nip", "beetd2/class/shout.nip"];
    }
  },

  41:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  42:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  43:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  44:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  45:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  46:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  47:  {
    SkillPoints: [149],  // battle orders
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  48:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  49:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  50:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  51:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  52:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  53:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  54:  {
    SkillPoints: [138],  // shout
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  55:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  56:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  57:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  58:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  59:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  60:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  61:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  62:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  63:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  64:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  65:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  66:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  67:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  68:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  69:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  70:  {
    SkillPoints: [137],  // taunt
    StatPoints: [2, 2, 2, 2, 2],
    Update: function () {
      
    }
  },

  71:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  72:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  73:  {
    SkillPoints: [137],  // taunt
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  74:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  75:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  76:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  77:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  78:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  79:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  80:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  81:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  82:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  83:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  84:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  85:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  86:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  87:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  88:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  89:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  90:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  91:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  92:  {
    SkillPoints: [142],  // find item
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  93:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  94:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  95:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  96:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  97:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  98:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  },

  99:  {
    SkillPoints: [155],  // battle command
    StatPoints: [3, 3, 3, 3, 3],
    Update: function () {
      
    }
  }

};
