/*!






 __  __                                                  ____                             
|  \/  |   __ _  __  __   ___   _ __     ___    ___     / ___|   __ _   _ __ ___     __ _ 
| |\/| |  / _` | \ \/ /  / _ \ | '_ \   / __|  / _ \   | |  _   / _` | | '_ ` _ \   / _` |
| |  | | | (_| |  >  <  |  __/ | | | | | (__  |  __/   | |_| | | (_| | | | | | | | | (_| |
|_|  |_|  \__,_| /_/\_\  \___| |_| |_|  \___|  \___|    \____|  \__,_| |_| |_| |_|  \__,_|
    





*/
/*!
*   @license © Copyright 2022, All rights reserved.
*   @author: Maxence Gama, maxence.gama@gmail.com, @maxencegama
*/

this.ref_ = this.ref_ || {};

(function(_){
    try {

        _.getElemID = (a) => {
            return document.getElementById(a);
        };
        
        _.enterAnim = () => {
            setTimeout(() => {
                document.querySelectorAll('.home-btn').forEach(e => e.classList.add("-show"));

                _.getElemID('solo').onclick = () => {
                    document.querySelectorAll('.home-btn').forEach(e => e.classList.add("-leaving"));
                    setTimeout(() => { window.location.href = "solo?type=local"; }, 500);
                }
                _.getElemID('online').onclick = () => {
                    document.querySelectorAll('.home-btn').forEach(e => e.classList.add("-leaving"));
                    setTimeout(() => { window.location.href = "solo?type=online"; }, 500);
                }
                _.getElemID('training').onclick = () => {
                    document.querySelectorAll('.home-btn').forEach(e => e.classList.add("-leaving"));
                    setTimeout(() => { window.location.href = "solo?type=training"; }, 500);
                }

            }, 1000);
        };

        (function(){
            window.setTimeout(_.enterAnim(), 0);
        }())
    } catch (error) {
        console.log(error);
    }

}(this.ref_));