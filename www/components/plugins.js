$(document).on("click", "#alerta", function() {
    function retorno() {
    }
        navigator.notification.alert("inserte todos seus dados bancarios", retorno, "Perigo inminente!", "Aceito"); 
});


$(document).on("click", "#confirm", function() {
    function confirma(buttonIndex) {
        if(buttonIndex=="1")
        {
            navigator.notification.alert("caiu no golpe");
        }
        else{
                navigator.notification.alert("parabens, caiu no golpe");
            }
    }
     navigator.notification.confirm("Deseja doar $1 aos carentes?", confirma, "Escolha", ['Aceito','É golpe']); 
}); 