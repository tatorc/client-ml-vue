<template>
    <div class="breadcrumb">
        {{cat}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Breadcrumb',
    beforeMount(){
        this.drawCategories()
    },
    data() {
        return {
            cat: "",
        }
    },
    computed: {
        ...mapGetters({
            categories: 'api/categories',
        }),
    },
    methods: {
        drawCategories(){
            if (this.categories && this.categories.length > 0 ) {
                this.cat = this.categories.map(item => {return item.name; }).join(" > ");
            }
        },
    }
}
</script>
