<template>
    <div class="loading">
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
</template>

<style lang="scss">
.loading {
  position: relative;
  width: 20px;
  height: 20px;
  align-items: center;
  display: flex;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>