let modeConfig = {
    mode1: () => { // mode1 = 開始頁面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.TLTitle];
        buttonList = [BTS.play, BTS.Setting, BTS.producerList, BTS.exit];
    },
    mode2: () => { // mode2 = 進入玩選單
        modeStack.push(modeFlag);
        init();
        textList = [TXT.howToPlay, TXT.chooseMod];
        buttonList = [BTS.easy, BTS.normal, BTS.difficult, BTS.exit];
    },
    mode3: () => { // mode3 = 進入外觀設定
        modeStack.push(modeFlag);
        init();
        textList = [];
        buttonList = [BTS.colorSetting, BTS.patternSetting, BTS.exit];
    },
    mode4: () => { // mode4 = 開始遊戲
        modeStack.push(modeFlag);
        init();
        Object.assign(TXT.scoreCounter, {
            x: 70 * scale,
            y: -162.5 * scale,
            font: 15 * scale + 'px Virgo',
        });
        Object.assign(TXT.MVP, {
            x: -70 * scale,
            y: -162.5 * scale,
            font: 15 * scale + 'px Virgo',
        });
        insideBorder.display = true;
        laserSwitch = true;
        textList = [TXT.scoreCounter, TXT.MVP];
        buttonList = [];
        player.limitMode = 'inside';
    },
    mode5: () => { // mode5 = 遊戲結束並且出現選單及再一次
        modeStack.push(modeFlag);
        init();
        Object.assign(TXT.scoreCounter, {
            x: 0 * scale,
            y: -15 * scale,
            font: 40 * scale + 'px Virgo'
        })
        Object.assign(TXT.MVP, {
            x: 0 * scale,
            y: -70 * scale,
            font: 50 * scale + 'px Virgo'
        });
        if (TXT.scoreCounter.text.match(/\d+/) >= 100 && laserSpeed >= 2) {
            textList.push(TXT.easterEgg);
        };
        buttonList = [BTS.menu, BTS.again];
    },
    mode6: () => { // mode6 = 圖案選擇介面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.choosePattern];
        buttonList = [BTS.round, BTS.heart, BTS.star, BTS.hexagon, BTS.exit];
    },
    mode7: () => { // mode7 = 顏色選擇介面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.chooseColorComb, TXT.yellow, TXT.pink, TXT.blue, TXT.cyan, TXT.purple, TXT.gray, TXT.castella];
        buttonList = [BTS.exit];
        colorTicketList.forEach(e => e.display = true);
    },
    mode8: () => { // mode8 = 觀看製作人名單
        modeStack.push(modeFlag);
        init();
        textList = [TXT.producerList];
        buttonList = [BTS.exit];
    },
    mode9: () => { // mode9 = 詢問是否退出遊戲
        modeStack.push(modeFlag);
        init();
        textList = [TXT.quitGame];
        buttonList = [BTS.yes, BTS.no];
    },
}