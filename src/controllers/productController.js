let producto= [
    {nombre:"Bolsas",
        descripcion:"Bolsas de diferentes tamaños para mayoristas y minoristas",
        id:1
    },
    
    {nombre:"Cartoneria",
        descripcion:"Bolsas de diferentes tamaños para mayoristas y minoristas. Bandejas, fajas, discos, planchas a granel, platos dorados",
        id:2
    },
    
    {nombre:"Papeleria",
    descripcion:"Papeles de diferentes tamaños para mayoristas y minoristas. ",
    id:3
    },
    
    {nombre:"Servilletas",
    descripcion:"Servilletas de diferentes tamaños para mayoristas y minoristas",
    id:4
    },
    
    ]

let productControllers= {
    index:function (req,res){
        res.render('index', {producto: producto})
},

/*Para pasarle contenido a nuestra vista necesitamos el formato objeto, (clave y valor)
El primer parametro recibe la vista
Referencia al array que tenemos declarado(frutasArr)
*/

detalle: function(req,res){
    let detalle=producto.find(producto=>producto.id==req.params.id)
    if(detalle == undefined){
    res.render("No se encontró el menú")
  }else {
    res.render('detalleMenu', {detalle:detalle})
  }
    res.render('index',{detalle:detalle})
}
}
module.exports= productControllers