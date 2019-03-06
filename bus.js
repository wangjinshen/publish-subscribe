
    function Bus() {
         return this
    }
    Bus.prototype = {
        constructor:Bus,
        watch: {},
        on: function (type, cd) {
            if (!this.watch.hasOwnProperty(type)) {
                this.watch[type] = [cd]
            } else {
                this.watch[type].push(cd)
            }
        },
        eimt: function (type, val) {
            if (this.watch.hasOwnProperty(type)) {
                this.watch[type].forEach(item => {
                    item(val)
                })

            }
        }
    }

