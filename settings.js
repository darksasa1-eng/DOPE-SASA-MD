const settings = {
  botName: "DOPE SASA MD",
  prefix: ".",
  ownerNumber: "94784167385",
  ownerName: "James",
  sessionId: "dope-sasa-session",
  thumbnail: "./media/menu.jpg",

  // Pairing
  pairingCode: true,
  pairingNumber: "",

  // Links
  telegramChannel: "https://t.me/dopesasamdz",
  telegramGroup: "https://t.me/dopesasazmdz",

  // GitHub DB
  githubToken: "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",
  githubOwner: "supportsasatech-arch",
  githubRepo: "database",

  // Bot mode: "public" = everyone, "self" = owner+premium only
  mode: "public",

  // Welcome/Left messages — toggle per group in settings
  welcome: {
    enabled: true,     // global toggle
    joinText: [        // random pick on join
      "Welcome to the family! 🎉",
      "A new soul has arrived! ✨",
      "The squad just got bigger! 🔥",
      "Fresh face in the building! 👀",
      "New arrival detected! 🚀",
    ],
    leftText: [        // random pick on leave
      "Another one bites the dust 💨",
      "They couldn't handle us 😤",
      "Farewell traveller 🌙",
      "See you on the other side 👋",
      "Gone but not forgotten 🕊️",
    ],
  },

  footerText: "© ᴘᴏᴡᴇʀᴅ ʙʏ ᴅᴏᴘᴇ ꜱᴀꜱᴀ",
};

module.exports = settings;
