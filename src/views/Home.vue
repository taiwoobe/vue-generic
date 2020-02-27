<template>
  <div class="home">
    <button type="button" class="btn" @click="showModal"> Open Modal </button>
    <Modal v-show="isModalVisible" @close="closeModal">
      <div slot="header" class="modal-header">
        <p>This is the header content for the Home Page</p> 
        <button type="button" class="btn-close" @click="closeModal"> X </button>
      </div>
      <div slot="body">
        This is the body content for the home page
      </div>
      <div slot="footer">
        This is the footer content for the Home Page
      </div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style scoped lang="scss">
  .modal-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .btn {
    padding: 8px 16px;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
  } 
  .btn-close {
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
  }
</style>
