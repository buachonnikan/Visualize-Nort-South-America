var m=0;
        function check(){
            if(m==0){
                document.getElementById("menu").style.display = "none";
                document.getElementById("brazil").style.display = "none";
                document.getElementById("canada").style.display = "none";
                document.getElementById("US").style.display = "none";
                document.getElementById("JM").style.display = "none";
                document.getElementById("AG").style.display = "none";
                document.getElementById("gdp").style.display = "initial";
                
                document.getElementById("BRA_rev").style.display = "none";
                document.getElementById("CAN_rev").style.display = "none";
                document.getElementById("USA_rev").style.display = "none";
                document.getElementById("JAM_rev").style.display = "none";
                document.getElementById("ARG_rev").style.display = "none";
                document.getElementById("all_rev").style.display = "initial";
                
                document.getElementById("ec").style.display = "none";
                document.getElementById("er").style.display = "initial";
                document.getElementById("eu").style.display = "none";
                document.getElementById("ea").style.display = "none";
                document.getElementById("ej").style.display = "none";
                document.getElementById("eb").style.display = "none";

                document.getElementById("ecg").style.display = "none";
                document.getElementById("eg").style.display = "initial";
                document.getElementById("eug").style.display = "none";
                document.getElementById("eag").style.display = "none";
                document.getElementById("ejg").style.display = "none";
                document.getElementById("ebg").style.display = "none";
                m=1;
            }
        }
        function Omenu(){
            document.getElementById("b1").style.left = "0";
            document.getElementById("b2").style.right = "0";
            document.getElementById("b3").style.left = "0";
            document.getElementById("b4").style.right = "0";
            document.getElementById("menu").style.display = "none";
        }
        function menu() {
            document.getElementById("b1").style.left = "-51%";
            document.getElementById("b2").style.right = "-49%";
            document.getElementById("b3").style.left = "-51%";
            document.getElementById("b4").style.right = "-49%";
            document.getElementById("menu").style.display = "initial";
        }

        function gt(){
            document.getElementById("brazil").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
            document.getElementById("gdp").style.display = "initial";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "initial";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function br() {
            document.getElementById("brazil").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
            document.getElementById("gdp").style.display = "none";
            
            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "initial";
        }
        function can() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("canada").style.display = "initial";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "initial";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function us() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "initial";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function ar() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("AG").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "initial";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function jm() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("JM").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "initial";
            document.getElementById("ebg").style.display = "none";
        }

        // revenue
        function rt(){
            document.getElementById("all_rev").style.display = "initial";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "initial";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";
        }
        function brr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "initial";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "initial";
        }
        function canr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";

            document.getElementById("ec").style.display = "initial";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";
        }
        function usr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "initial";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";
        }
        function arr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "initial";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "initial";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";
        }
        function jmr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "initial";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "initial";
            document.getElementById("eb").style.display = "none";
        }