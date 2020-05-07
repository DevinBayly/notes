let url = "https://drive.google.com/file/d/1PeY1DiTDFWAUROL7-T9A9ZqxGeDB278t/preview"

export let makeiframe = ()=> {
 let ob = {}
 ob.create = ()=> {
     let i = document.createElement("iframe")
     i.src = url
     document.body.append(i)
     i.style.position ="absolute"
     i.style.bottom="0px"
     i.style.right="0px"
 }
 return ob
}
