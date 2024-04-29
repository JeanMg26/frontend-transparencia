<template>
  <!-- //******** Upload Files ********* -->
  <div class="q-mt-md">
    <span class="q-label">Subir una imagen</span>
    <q-icon
      name="fa-solid fa-circle-info"
      class="q-ml-xs cursor-pointer"
      color="grey-6"
      size="0.8rem"
    >
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <span style="font-size: 0.8rem">
          Máximo 2MB en formatos JPEG/JPG/PNG
        </span>
      </q-tooltip>
    </q-icon>
    <!-- //++Preview Image -->
    <div class="q-mt-xs q-gutter-sm">
      <template v-if="articleState.url_img && !previewFile">
        <q-img class="image-preview" :src="articleState.url_img">
          <q-icon
            class="icon-remove"
            size="1.2rem"
            name="fa-solid fa-circle-xmark"
            color="primary"
            @click="onRemoveImage"
          >
          </q-icon>
        </q-img>
      </template>
      <template v-if="previewFile">
        <q-img class="image-preview" :src="previewFile">
          <q-icon
            class="icon-remove"
            size="1.2rem"
            name="fa-solid fa-circle-xmark"
            color="primary"
            @click="onRemoveImage"
          >
          </q-icon>
        </q-img>
      </template>
      <!-- //!!Button Upload!! -->
      <q-btn
        unelevated
        outline
        no-caps
        color="primary"
        class="btn-upload-file"
        @click="onUploadFile"
      >
        <q-icon size="1rem" name="fa-solid fa-upload" />
        <span>Cargar</span>
      </q-btn>
    </div>
    <!-- //++Upload Files++ -->
    <q-file
      v-model="imageUpload"
      outlined
      class="q-mt-xs hidden"
      ref="refUploadImage"
      accept=".jpg,.jpeg,.png"
      @update:model-value="onPreviewImage"
    >
    </q-file>
  </div>
</template>

<script setup lang="ts">
import { Article } from "@interfaces/interface-store";
import { uploadImageAPI } from "@services/api_rest";
import { AxiosError } from "axios";
import { ref, PropType } from "vue";

// ++Emits
const emits = defineEmits(["emitImageUpload"]);

// ++Props
defineProps({
  articleState: {
    type: Object as PropType<Article>,
    required: true,
  },
});

// ***************** Constants ******************
const previewFile = ref<any>();
const imageUpload = ref<any>(null);
const refUploadImage = ref<any>(null);

// ***************** Functions Template ******************
// ++ Open Window to Upload Image
const onUploadFile = () => {
  refUploadImage.value.pickFiles();
};

// ++Remove Image
const onRemoveImage = () => {
  previewFile.value = "";
  refUploadImage.value.removeFile();
};

// ++ Preview Image
const onPreviewImage = async (newFile: any) => {
  console.log(newFile);
  let reader = new FileReader();
  reader.onload = function (e: any) {
    previewFile.value = e.target.result;
  };
  reader.readAsDataURL(newFile);
  uploadImage();
};

// ++Upload Image
const uploadImage = async () => {
  // --Get ID Image
  const formdata = new FormData();
  formdata.append("path", imageUpload.value);
  try {
    const {
      data: { id_image },
    } = await uploadImageAPI(formdata);
    emits("emitImageUpload", id_image);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.image-preview {
  height: 80px;
  max-width: 100px;
}

.icon-remove {
  position: absolute;
  cursor: pointer;
  pointer-events: all;
  top: 8px;
  right: 8px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
