function getFolderListInFolder() {
  let folder = DriveApp.getRootFolder();
  let folderId = folder.getId();
  let name = "";
  let i = ROW_INDEX_TO_START_OUTPUTING_RECORDS; //フォルダを処理する行位置
    
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME_2ND);
  
  let folders = DriveApp.searchFolders("'"+folderId+"' in parents");
  while(folders.hasNext()) {
    let folder = folders.next();
    sheet.getRange(i, 0+COLUMN_INDEX_OF_FOLDER_LIST_IN_ROOT).setValue(name + folder.getName());
    sheet.getRange(i, 1+COLUMN_INDEX_OF_FOLDER_LIST_IN_ROOT).setValue(folder.getId());
    sheet.getRange(i, 2+COLUMN_INDEX_OF_FOLDER_LIST_IN_ROOT).setValue(folder.getUrl());
    i++;
  }
}

function getFileListInFolder() {
  let name = "";
  let i = ROW_INDEX_TO_START_OUTPUTING_RECORDS;
  let ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(SHEET_NAME_2ND);
  // let folderId = sheet.getRange(1, 2).getValue();
  let folderId = sheet.getRange("B1").getValue();
  console.log(folderId);
  let folder = DriveApp.getFolderById(folderId);
  let files = folder.getFiles();

  // var folders = DriveApp.searchFolders("'"+key+"' in parents");
  while(files.hasNext()) {
    let file = files.next();
    sheet.getRange(i, 0+COLUMN_INDEX_OF_FILE_LIST_TO_GET).setValue(name + file.getName());
    sheet.getRange(i, 1+COLUMN_INDEX_OF_FILE_LIST_TO_GET).setValue(file.getId());
    sheet.getRange(i, 2+COLUMN_INDEX_OF_FILE_LIST_TO_GET).setValue(file.getUrl());
    i++;
  }
}

function copyFileToTargetFolder() {
  // 変数宣言
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME_2ND);
  let rowIndex = 4;
  let outputFolderId = sheet.getRange(rowIndex, COLUMN_INDEX_OF_FILE_LIST_TO_COPY_FILE).getValue(); // 出力先フォルダID（H4セルのフォルダID）
  rowIndex = 6;
  let outputFileName = sheet.getRange(rowIndex, COLUMN_INDEX_OF_FILE_LIST_TO_COPY_FILE).getValue(); // 出力ファイル名（H6セルのファイル名）
  rowIndex = 7;
  let outputFileAmount = Number(sheet.getRange(rowIndex, COLUMN_INDEX_OF_FILE_LIST_TO_COPY_FILE).getValue()); // 出力ファイル数（H7セルのファイル数）
  
  // テンプレートファイル（「yyyyMMdd(E)」）
  let templateFile = DriveApp.getFileById(TEMPLATE_FILE_ID);
  // 出力先フォルダ（H4セルのフォルダ）
  let outputFolder = DriveApp.getFolderById(outputFolderId);

  // ファイルをコピーする。
  for (let k = 0; k < outputFileAmount; k++) {
    templateFile.makeCopy(outputFileName, outputFolder);
  }

  // ●実行ステータス入力：完了確認（H8セルへのステータス確認）
  // Utilities.sleep(1000);
  rowIndex = 8;
  sheet.getRange(rowIndex, COLUMN_INDEX_OF_FILE_LIST_TO_COPY_FILE).setValue("Terminated!");
  // ●実行ステータス入力：実行待ち（H8セルへのステータス入力）
  // Utilities.sleep(1000);
  // sheet.getRange(8, column_index).setValue('Waiting...');
}

function renameFiles() {
  let file;
  let i = ROW_INDEX_TO_START_OUTPUTING_RECORDS; //フォルダを処理する行位置
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME_2ND);
  
  while(sheet.getRange(i, COLUMN_INDEX_OF_FILE_LIST_TO_RENAME).getValue() != "") {
    file = DriveApp.getFileById(sheet.getRange(i, COLUMN_INDEX_OF_FILE_LIST_TO_RENAME + 1).getValue());
    file.setName(sheet.getRange(i, COLUMN_INDEX_OF_FILE_LIST_TO_RENAME).getValue());
    i++;
  }
}

