let menu= [
    {
        nombre:"Carpaccio Fresco",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:47.00,
        id:1
        },
    
    {
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio:47.00,
    id:2
    },
{
    nombre:"Mousse de arroz",
      descripcion:"Mousse de arroz con leche y aroma de azahar",
      precio:27.5,
      id:3
},
    {       
nombre:"Espárragos blancos",
descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
 precio:37.50,
        id:4
    },
    {       
        nombre:"Roast Beef with sublime sun gold egg",
        descripcion:"Bife con huevo frito",
         precio:43.50,
                id:5
            },
            

    ]

let mainControllers= {
    index:function (req,res){
        res.render('index', {menu: menu})
},

/*Para pasarle contenido a nuestra vista necesitamos el formato objeto, (clave y valor)
El primer parametro recibe la vista
Referencia al array que tenemos declarado(frutasArr)
*/

detalle: function(req,res){
    let detalle=menu.find(menu=>menu.id==req.params.id)
    if(detalle == undefined){
    res.render("No se encontró el menú")
  }else {
    res.render('detalleMenu', {detalle:detalle})
  }
    res.render('index',{detalle:detalle})
}
}
module.exports= mainControllers