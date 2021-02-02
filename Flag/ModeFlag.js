// mode1 = 開始頁面
// mode2 = 進入玩選單
// mode3 = 進入外觀設定
// mode4 = 開始遊戲
// mode5 = 遊戲結束並且出現選單及再一次
// mode6 = 圖案選擇介面
// mode7 = 顏色選擇介面
// mode8 = 觀看製作人名單
// mode9 = 詢問是否退出遊戲

let modeConfig = {
    mode1: () => {
        modeStack.push(modeFlag);
        init();
        textList['TLTitle'].display = true;
        buttonList[0].display = true;
        buttonList[1].display = true;
        buttonList[2].display = true;
        buttonList[16].display = true;
    },
    mode2: () => {
        modeStack.push(modeFlag);
        init();
        textList['howToPlay'].display = true;
        textList['chooseMod'].display = true;
        buttonList[3].display = true;
        buttonList[4].display = true;
        buttonList[5].display = true;
        buttonList[16].display = true;
    },
    mode3: () => {
        modeStack.push(modeFlag);
        init();
        buttonList[6].display = true;
        buttonList[7].display = true;
        buttonList[16].display = true;
    },
    mode4: () => {
        modeStack.push(modeFlag);
        init();
        textList['scoreCounter'].x = 0 * scale;
        textList['scoreCounter'].y = -162.5 * scale;
        textList['scoreCounter'].font = 15 * scale + 'px Virgo';
        textList['scoreCounter'].display = true;
        insideBorder.display = true;
        laserSwitch = true;
        player.limitMode = 'inside';
    },
    mode5: () => {
        modeStack.push(modeFlag);
        init();
        textList['scoreCounter'].y = -15 * scale;
        textList['scoreCounter'].font = 40 * scale + 'px Virgo';
        textList['scoreCounter'].display = true;
        if (textList['scoreCounter'].text.match(/\d+/) >= 100 && laserSpeed === 2.2) {
            textList['easterEgg'].display = true;
        };
        buttonList[12].display = true;
        buttonList[13].display = true;
    },
    mode6: () => {
        modeStack.push(modeFlag);
        init();
        textList['choosePattern1'].display = true;
        textList['choosePattern2'].display = true;
        buttonList[8].display = true;
        buttonList[9].display = true;
        buttonList[10].display = true;
        buttonList[11].display = true;
        buttonList[16].display = true;
    },
    mode7: () => {
        modeStack.push(modeFlag);
        init();

        // Color Words
        ['chooseColorComb', 'yellow', 'pink', 'blue',
            'cyan', 'purple', 'gray', 'castella'].forEach(e => textList[e].display = true);
        colorTicketList.forEach(e => e.display = true)
        buttonList[16].display = true;
    },
    mode8: () => {
        modeStack.push(modeFlag);
        init();
        buttonList[16].display = true;
        buttonList[16].display = true;
    },
    mode9: () => {
        modeStack.push(modeFlag);
        init();
        textList['quitGame'].display = true;
        buttonList[14].display = true;
        buttonList[15].display = true;
    },
}