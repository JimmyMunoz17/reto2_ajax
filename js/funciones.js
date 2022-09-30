function get_data(){
    $.ajax({
        url:"https://g54e18a710da042-jqj2j2tugrdiwb1u.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/clientes/clientes",
        type:"GET",
        dataType:"JSON",
        success: function(result){
            console.log(result);
            get_data_html(result.items);
        }
    })
}

function get_data_html(items){
    let table = "<table>";
    for(i=0; i < items.length; i++){
        table += "<tr>";
        table += "<td>" + items[i].id +"</td>";
        table += "<td>" + items[i].name +"</td>";
        table += "<td>" + items[i].email +"</td>";
        table += "<td>" + items[i].age +"</td>";
        table += "<td> <button onclick='delete_data("+items[i].id+")'>Eliminar</button>";
        table += "<tr>";
    }
    table += "</table>";
    $("#resultado").append(table);
}

function post_data(){
    let myData = {
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g54e18a710da042-jqj2j2tugrdiwb1u.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/clientes/clientes",
        type:"POST",
        data: myData,
        dataType:"JSON"
    }).always(function(){
        $("#resultado").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        get_data();
    });
}

function put_data(){
    let myData = {
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://g54e18a710da042-jqj2j2tugrdiwb1u.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/clientes/clientes",
        type:"PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType:"JSON",
    }).always(function(){
        $("#resultado").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
        get_data();
    });
}

function delete_data(id){
    let id_data ={
        id: id
    }
    let dataToSend = JSON.stringify(id_data);
    $.ajax({
        url:"https://g54e18a710da042-jqj2j2tugrdiwb1u.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/clientes/clientes",
        type:"DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType:"JSON",
    }).always(function(){
        $("#resultado").empty();
        $("#id").val("");
        get_data();
    })
}

function get_data_id(){
    let id = $("#id").val();
    $.ajax({
        url:"https://g54e18a710da042-jqj2j2tugrdiwb1u.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/clientes/clientes/" + id,
        type:"GET",
        dataType:"JSON",
        success: function(result){
            console.log(result);
            $("#resultado").empty();
            get_data_html(result.items);
        }
    })
}