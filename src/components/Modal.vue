<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            This is the default title!
            <button type="button" class="btn-close" @click="close" aria-label="Close modal"> X </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">I'm the default body!</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close" aria-label="Close modal"> Close me! </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 15px;
    .modal-header,
    .modal-footer {
      padding: 15px;
      display: flex;
    }
    .modal-header {
      border-bottom: 1px solid #eeeeee;
      color: #4aae9b;
      justify-content: space-between;
      align-items: center;
      .btn-close {
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4aae9b;
        background: transparent;
      }
    }
    .modal-body {
      position: relative;
      padding: 20px 10px;
    }
    .modal-footer {
      border-top: 1px solid #eeeeee;
      justify-content: flex-end;
      .btn-green {
        color: #fff;
        background: #4aae9b;
        border: 1px solid #4aae9b;
        border-radius: 2px;
      }
    }
  }
}
</style>
