import { dirty_components } from "svelte/internal";

export let pdfOb = async () => {
    let ob = {}
    var API_KEY = 'AIzaSyAIYCyk2KaSfTyX67jJuNKYo-AZAtwwZ-U';
    // the function that will get called on 
    ob.ep = null

    ob.create = async (id) => {
        let s = document.createElement("script")
        s.src = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.3.200/build/pdf.min.js"
        document.body.append(s)
        ob.pdfData = await fetch(`https://www.googleapis.com/drive/v3/files/${id}/?key=${API_KEY}&alt=media`).then(res => res.arrayBuffer())
        ob.pdfjsLib = window['pdfjs-dist/build/pdf'];

        // The workerSrc property shall be specified.
        ob.pdfjsLib.disableWorker = true
        // load the pdf
        ob.pdf = ob.pdfjsLib.getDocument({ data: ob.pdfData }).promise
        ob.holder = document.querySelector("#pdfcontainer")
        let left = document.createElement("button")
        left.addEventListener("click",()=> {
            // progress the page, call ep
            ob.page -=1
            ob.loadPage(ob.page)
            ob.ep()
        })
        let right = document.createElement("button")
        right.addEventListener("click",()=> {
            // progress the page, call ep
            ob.page +=1
            ob.loadPage(ob.page)
            ob.ep()
        })
        ob.holder.append(left)
        ob.holder.append(right)
    }
    ob.loadPage = (p) => {
        ob.page = parseInt(p)
        ob.pdf.then(pdf => {
            console.log('PDF loaded');
            pdf.getPage(parseInt(p)).then(function (page) {
                console.log('Page loaded');

                var scale = 1;
                var viewport = page.getViewport({ scale: scale });

                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.promise.then(function () {
                    console.log('Page rendered');
                });
            });
        })
    }
    return ob
}
export let pdfrun = async () => {
    //pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    // Using DocumentInitParameters object to load binary data.
    var loadingTask = pdfjsLib.getDocument({ data: pdfData });
    loadingTask.promise.then(function (pdf) {
        console.log('PDF loaded');

        // Fetch the first page
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function (page) {
            console.log('Page loaded');

            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                console.log('Page rendered');
            });
        });
    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });
}