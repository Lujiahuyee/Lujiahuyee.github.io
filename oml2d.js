const rawOpen = window.open;
window.open = function(){
    console.log("已拦截看板娘跳转");
    return null;
}



   // {
   //   path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json",
   //   scale: 0.08,
   //   position: [0, 60]
   // }
   //仙狐

   //{
   //  path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json",
   //  scale: 0.4,
   //  position: [0, 50]
   //}
   //恶魔


OML2D.loadOml2d({
  dockedPosition: "right",
  persistModelIndex: false,
  models: [
     {
       path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json",
       scale: 0.4,
       position: [0, 50]
     }
  ],
 // modelClick: false
})