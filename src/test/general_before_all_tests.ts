import { copy_The_Current_Database_To_The_myTmpDir } from "../1_04_utility/tmp_dir_handler.js";
//----------------------------------------------------------------------------------------------------
export { before_All_Tests };
//----------------------------------------------------------------------------------------------------
async function before_All_Tests() {
        await copy_The_Current_Database_To_The_myTmpDir();
}
//----------------------------------------------------------------------------------------------------
