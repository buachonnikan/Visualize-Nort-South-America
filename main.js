var m=0;
        function check(){
            if(m==0){
                document.getElementById("menu").style.display = "none";
                document.getElementById("brazil").style.display = "none";
                document.getElementById("canada").style.display = "none";
                document.getElementById("US").style.display = "none";
                document.getElementById("JM").style.display = "none";
                document.getElementById("AG").style.display = "none";
                
                document.getElementById("BRA_rev").style.display = "none";
                document.getElementById("CAN_rev").style.display = "none";
                document.getElementById("USA_rev").style.display = "none";
                document.getElementById("JAM_rev").style.display = "none";
                document.getElementById("ARG_rev").style.display = "none";
                document.getElementById("all_rev").style.display = "initial";
                
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
        function br() {
            document.getElementById("brazil").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
        }
        function can() {
            document.getElementById("canada").style.display = "initial";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
        }
        function us() {
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
        }
        function ar() {
            document.getElementById("AG").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("JM").style.display = "none";
        }
        function jm() {
            document.getElementById("JM").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
        }

        // revenue
        function brr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "initial";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";
        }
        function canr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
        }
        function usr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";
        }
        function arr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "initial";
        }
        function jmr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "initial";
            document.getElementById("ARG_rev").style.display = "none";
        }