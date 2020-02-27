<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="btn" @click="showModal"> Open Modal </button>
    <Modal v-show="isModalVisible" @close="closeModal">
      <div slot="header" class="modal-header">
        <p>This is the header content for the about Page</p> 
        <button type="button" class="btn-close" @click="closeModal"> X </button>
      </div>
      <div slot="body">
        This is the body content for the about us page. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium et recusandae quasi ad inventore, commodi cumque laborum ducimus ratione, 
        numquam eos quo consequatur consectetur id, iste nihil sunt minus porro?
      </div>
      <div slot="footer">
        This is the footer content for the about Page
      </div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue'
export default {
  name: 'About',
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

