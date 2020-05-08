export let imageOb = () => {
    let ob = {}
    // 
    ob.ep = null
    ob.create = (src) => {
        //
        let i = new Image()
        i.src = src
        i.onload = () => {
            ob.holder = document.querySelector("#pdfcontainer")
            ob.holder.style.overflow= "scroll"
            ob.holder.style.height=`500px`
            ob.holder.append(i)
        }
    }
    ob.page = 0
    ob.shiftup = ()=> {
        ob.page -=1
        // # of pages
        ob.topCalc =ob.holder.getBoundingClientRect().height*ob.page
        ob.holder.scrollTop = ob.topCalc
        ob.ep()
    }
    ob.shiftdown =()=> {
        ob.page+=1
        ob.topCalc =ob.holder.getBoundingClientRect().height*ob.page
        ob.holder.scrollTop = ob.topCalc
        ob.ep()
    }
    return ob
}