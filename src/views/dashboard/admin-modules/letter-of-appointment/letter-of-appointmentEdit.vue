<template>
<section id="letterofappointement">
  <b-card
    v-if="Object.keys(blogEdit).length"
    class="blog-edit-wrapper"
  >


    <!-- form -->
    <b-form class="mt-2">
      <h2 class="mb-1">
                New Letter of Appointment
            </h2> 
      <b-row>
        <b-col md="6">
          <b-form-group
            label="ENTER A POLICY NUMBER"
            class="mb-2"
          >
            <b-form-input  
            />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="CHOOSE A BROKER TO MOVE THIS POLICY TO (START TYPING THEIR NAME)"
            class="mb-2"
          >
            <b-form-input
            />
          </b-form-group>
        </b-col>
         <b-col md="6">
          <b-form-group
            label="SELECT A LETTER OF APPOINTMENT TO UPLOAD"
            class="mb-2">
                 <b-form-file
                    ref="refInputEl"
                    v-model="blogFile"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose file"
                    @input="inputImageRenderer"/>
          </b-form-group>
          
        </b-col>
        <b-col
          cols="12"
          class="mb-2"
        >
         <b-form-checkbox value="me">Check me out</b-form-checkbox>
        </b-col>
        <b-col
          cols="12"
          class="mt-50"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-1"
          >
           Update
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
          >
            Cancel
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    <!--/ form -->
  </b-card>
  </section>
</template>

<script>
import {
  BCard, BMedia, BAvatar, BCardText, BMediaAside, BMediaBody, BForm, BRow, BCol, BFormGroup, BFormInput, BImg, BFormFile, BLink, BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { quillEditor } from 'vue-quill-editor'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BCard,
    BMedia,
    BAvatar,
    BCardText,
    BMediaAside,
    BMediaBody,
    BForm,
    BLink,
    BImg,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    vSelect,
    quillEditor,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      blogEdit: {},
      blogFile: null,
      categoryOption: ['Fashion', 'Food', 'Gaming', 'Quote', 'Video'],
      statusOption: ['Published', 'Pending', 'Draft'],
      snowOption: {
        theme: 'snow',
      },
    }
  },
  created() {
    this.$http.get('/blog/list/data/edit').then(res => { this.blogEdit = res.data })
    this.form.checked = []
  },
  setup() {
    const refInputEl = ref(null)
    const refPreviewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => { refPreviewEl.value.src = base64 })

    return {
      refInputEl,
      refPreviewEl,
      inputImageRenderer,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/pages/page-blog.scss';
</style>
