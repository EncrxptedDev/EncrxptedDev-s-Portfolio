const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Tool Based Gun System",
        category: "systems",
        description: "Advanced gun system with OTS, togglable right/left shoulder camera positions, and full configurations (recoil, ammo, damage, range, fire rate, spread).",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/bc6bfb17c7229272d1624a4072b7f5a1.mp4",
        link: "https://gyazo.com/bc6bfb17c7229272d1624a4072b7f5a1",
        techStack: ["Combat", "Camera", "Weapons"]
    },
    {
        id: 2,
        title: "View Model Gun System",
        category: "systems",
        description: "First-person view model weapon system featuring the same advanced configurations inside a highly optimized view model framework.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/5997f0c471b33124e489a0cca1022037.mp4",
        link: "https://gyazo.com/5997f0c471b33124e489a0cca1022037",
        techStack: ["FPS", "ViewModels", "Combat"]
    },
    {
        id: 3,
        title: "Cross-Platform Keybinds",
        category: "ui",
        description: "Universal keybind controller supporting Mobile, Console, and PC inputs for in-game actions like push, block, sprint, and throw.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/17a2dff73e71a11ce46dce2b251dd85f.mp4",
        link: "https://gyazo.com/17a2dff73e71a11ce46dce2b251dd85f",
        techStack: ["InputService", "Cross-Platform", "UI"]
    },
    {
        id: 4,
        title: "Soccer Ball Physics",
        category: "minigames",
        description: "Custom physics system for smooth soccer ball dribbling and a kick power meter mechanic.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/af7e1dfd189b005a5379ec0a471e9ed1.mp4",
        link: "https://gyazo.com/af7e1dfd189b005a5379ec0a471e9ed1",
        techStack: ["Physics", "Sports", "Mechanics"]
    },
    {
        id: 5,
        title: "Melee Combat System",
        category: "systems",
        description: "Tool-based melee combat featuring perfectly synced combo animations alongside accurate hit detection and damage sync.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/1bca8ac9851325223698bd453d409f29.mp4",
        link: "https://gyazo.com/1bca8ac9851325223698bd453d409f29",
        techStack: ["Hitboxes", "Animations", "Melee"]
    },
    {
        id: 6,
        title: "Advanced Fishing System",
        category: "minigames",
        description: "Fisch-inspired mechanic with perfect line casting, animation syncing, fish rarities, and interactive reeling.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/d6e03d8672d5bfa6a05ddfc82e61f7c9.mp4",
        link: "https://gyazo.com/d6e03d8672d5bfa6a05ddfc82e61f7c9",
        techStack: ["Mechanics", "Data", "Minigame"]
    },
    {
        id: 7,
        title: "Custom Intro Sequence",
        category: "ui",
        description: "A polished, custom intro sequence to welcome players into the game with smooth camera transitions and animated UI elements.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/439777d32729c487c6dac0ff9b87732e.mp4",
        link: "https://gyazo.com/439777d32729c487c6dac0ff9b87732e",
        techStack: ["Cinematics", "UI Design", "Tweening"]
    },
    {
        id: 8,
        title: "Advanced ATM & Banking",
        category: "systems",
        description: "Comprehensive economy system featuring character slot data, bank/cash balances, and full deposit/withdrawal/transfer functions.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/8789752bd85887646e1d2362ff146f91.mp4",
        link: "https://gyazo.com/8789752bd85887646e1d2362ff146f91",
        techStack: ["DataStores", "Economy", "Security"]
    },
    {
        id: 9,
        title: "Multi-Camera Display",
        category: "systems",
        description: "Security or cinematic camera system offering sliding track mounts, player following, and part whitelisting for rendering.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/433e7a7d2c6d9fe16098fe80c8878bcd.mp4",
        link: "https://gyazo.com/433e7a7d2c6d9fe16098fe80c8878bcd",
        techStack: ["ViewportFrames", "Camera", "Render"]
    },
    {
        id: 10,
        title: "Zone Round System",
        category: "systems",
        description: "Zone or storm-based round loop featuring comprehensive player data tracking, automated win/gem rewards, and dynamic end-of-round podium leaderboards.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/7c122cfbf0340b1606e89fae488a5f7c.mp4",
        link: "https://gyazo.com/7c122cfbf0340b1606e89fae488a5f7c",
        techStack: ["Game Loop", "DataStores", "Leaderboards"]
    },
    {
        id: 11,
        title: "Interactive Spin Wheel",
        category: "ui",
        description: "Smooth, animated spin wheel optimized for daily rewards or simulator-style game mechanics with randomized probability weighting.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/8edda0a7e97aeb6a56afc66024710260.mp4",
        link: "https://gyazo.com/8edda0a7e97aeb6a56afc66024710260",
        techStack: ["UI Design", "TweenService", "Rewards"]
    }
];

// Instructions for the User:
/*
================================================================================
HOW TO ADD NEW PROJECTS:
1. Copy one of the blocks above (from '{' to '}').
2. Add a comma after the last block, paste the new block.
3. Edit the fields:
   - title: Name of your project
   - category: Must be exactly "ui", "systems", or "minigames"
   - description: 1-2 sentences about the project
   - mediaType: put "video" for gyazo clips, "image" for gyazo images
   - mediaUrl: The direct image/gif/mp4 URL (eg: https://i.gyazo.com/your-id.mp4)
   - link: The link clients go to when they click the view button.
   - techStack: An array of strings highlighting skills used.
================================================================================
*/
