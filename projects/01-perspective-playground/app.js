Vue.createApp({
    data() {
      return {
        perspective: 100,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      }
    },
    computed:{
        box(){
            return {
                transform: `\n\tperspective(${this.perspective}px) \n\trotateX(${this.rotateX}deg) \n\trotateY(${this.rotateY}deg) \n\trotateZ(${this.rotateZ}deg)`
            }               
        }
    },
    methods:{
        reset(){
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy() {
            let text = `transform:${this.box.transform};`
            await navigator.clipboard.writeText(text)
            //alert("CSS Copied to Clipboard!")
            this.showAlert()
        },
        showAlert() {
            //Call SweetAlert2
            Swal.fire({
              title: 'Success!!',
              text: 'CSS Copied to Clipboard!',
              icon: 'success',
              confirmButtonText: 'Close'
            });
        }
    }
}).mount('#app')
