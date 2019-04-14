var m=0;
        function check(){
            if(m==0){
                document.getElementById("menu").style.display = "none";
                m=1;
            }
        }
        function Omenu(){
            document.getElementById("b").style.top = "0";
            document.getElementById("b1").style.left = "0";
            document.getElementById("b2").style.right = "0";
            document.getElementById("menu").style.display = "none";
        }
        function menu() {
            document.getElementById("b").style.top = "-100%";
            document.getElementById("b1").style.left = "-51%";
            document.getElementById("b2").style.right = "-51%";
            document.getElementById("menu").style.display = "initial";
        }