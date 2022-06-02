/**
   * onOpen
*/
function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu("リスト取得処理")
    // .addItem('メニュー1', 'myFunction1')
    .addSeparator()
    .addSubMenu(SpreadsheetApp.getUi()
      .createMenu("Column A to E")
        .addItem("Outputs folder info in the root folder", "getFolderListInFolder")
    )
    .addSeparator()
    .addSubMenu(SpreadsheetApp.getUi()
      .createMenu("Column F to H")
        .addItem("Outputs file info in the folder that ID is a value in 'B1' cell", "getFileListInFolder")
    )
    .addSeparator()
    .addSubMenu(SpreadsheetApp.getUi()
      .createMenu("Column J")
        .addItem("Copies files into the folder that ID is a value in 'J4' cell", "copyFileToTargetFolder")
    )
    .addSeparator()
    .addSubMenu(SpreadsheetApp.getUi()
      .createMenu("Column L to M")
        .addItem("Renames files with ID in the M column", "renameFiles")
    )
    .addToUi();
}
