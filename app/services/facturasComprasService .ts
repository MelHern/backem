
const conectarBD = require('./conexion')
var pdf = require('html-pdf');

 class facturaComprasServices{

    public con:any=""
 
     constructor(con:any){
       this.con= conectarBD.conectar()
    
    }

    imprimir(id:number ,retorno:any){
    //     let query=`SELECT *  FROM facturasVentas
    //     INNER JOIN facturasVentasLineas.idFactura ON facturasVentas.id
    //     WHERE facturasVentas.id = ?`;
  
    //    return this.con.query(query,[id] ,async function (err:any, result:any, fields:any) {

        let cosas="ddd";
        var options = {
          "format": 'A4',
          "header": {
              "height": "60px"
          },
          "footer": {
              "height": "22mm"
          },
          "base": 'file://Users/midesweb/carpeta_base/'
         };
        let cabecera=`<div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">
        <img src="http://desarrolloweb.com/images/logodwgris.png" alt="imagen "width="150" height="27" align="left">
        <p style="color: #666; margin: 0; padding-top: 12px; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .85em">
          Publicar en Internet
        </p>
      </div>`;
      
      let contenido=`<h1>${cosas}</h1>`;
      
      let footer=`<div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
      <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;">http://desarrolloweb.com/manuales/publicar-webs-internet.html</p>
      <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
      </div>`;
      
      let final=cabecera + contenido + footer;
      
      pdf.create(final,options).toFile(`./factura.pdf`, function(err:any, res:any) {
        if (err){
            console.log(err);
        } else {
            console.log(res);
        }
      });




    //    retorno( ({
    //         'error': err,
    //         'data': fields,
    //         'result':result
    //       })
    //    )
    //     })
    }

    cambiaEstado(estado:string,id:number ,retorno:any){
        let query=`UPADTE facturasVentas
        SET estado=?
        WHERE facturasVentas.id = ?`;
  
       return this.con.query(query,[id] ,async function (err:any, result:any, fields:any) {

       retorno( ({
            'error': err,
            'data': fields,
            'result':result
          })
       )
        })
    }

     

}
module.exports =  facturaVentasServices