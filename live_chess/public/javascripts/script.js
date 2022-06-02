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