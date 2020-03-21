<script>
import {performUpload,performGet,brandNew} from "./drive_code.js"
</script>
  <div>
    <p>Drive API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button on:click={performUpload}>creatfile</button>
    <button on:click={brandNew}>makenew</button>
    <button on:click={performGet}>getfile</button>
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>



  </div>