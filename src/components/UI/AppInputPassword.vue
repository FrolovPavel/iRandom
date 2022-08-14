<template lang="pug">
.input-password
  .input-password__wrapper
    input.input-password__field(
      readonly
      :value="password"
    )
    RefreshIcon.input-password__refresh(
      ref="refresh"
      @click="onClickRefresh"
    )
    a-tooltip(v-if="windowWidth < deviceSizes.tablet" title="Пароль надёжеый" trigger="click")
      AppBadge.input-password__badge(ref="badge")
    AppBadge.input-password__badge(v-else ref="badge") ненадежный
  CopyIcon(
    v-if="windowWidth < deviceSizes.tablet"
    v-on:click="onClickCopy"
  )
  a-button(
    v-else
    size="large"
    type="primary"
    shape="round"
    @click="onClickCopy"
  ) Копировать
</template>

<script>
import {onMounted, ref} from "vue";
import RefreshIcon from "@/components/Icons/RefreshIcon";
import {message} from "ant-design-vue";
import useWidth from "@/hooks/useWidth";
import useDeviceSizes from "@/hooks/useDeviceSizes";
import CopyIcon from "@/components/Icons/CopyIcon";
import AppBadge from "@/components/UI/AppBadge";
export default {
  name: "AppInputPassword",
  components: {CopyIcon, AppBadge, RefreshIcon},
  props: {
    password: {
      type: String,
      required: true
    }
  },
  emits: ['refresh'],
  setup(props, {emit}) {

    const refresh = ref(null)

    const onClickRefresh = async () => {
      let refreshClasses = refresh.value.$el.classList

      refreshClasses.add('spin')
      let timeout = setTimeout(()=> {

        refreshClasses.remove('spin')
        emit('refresh')
        clearTimeout(timeout)
      },300)
    }

    const onClickCopy = () => {
      message.success('Скопирован в буфер обмена', 1)
    }


    const {windowWidth} = useWidth()

    const {deviceSizes} = useDeviceSizes()


    const badge = ref(null)

    const widthBadge = ref()

    onMounted(() => {
      widthBadge.value = badge.value.$el.offsetWidth + 'px'
    })

    return {
      onClickRefresh,
      onClickCopy,
      refresh,
      windowWidth,
      deviceSizes,
      widthBadge,
      badge,
    }
  }
}
</script>

<style lang="scss">
.input-password {
  display: flex;
  align-items: center;

  &__wrapper {
    width: 100%;
    margin-right: 20px;
    position: relative;

    &:hover {
      .input-password__field {
        box-shadow: $shadowBase;
      }
    }
  }

  &__field {
    width: 100%;
    height: 44px;
    border-radius: $borderRadiusLarge;
    padding: 14px 20px;
    padding-right: calc(71px + v-bind(widthBadge));
    text-overflow: ellipsis;
    border: $borderBase;
    outline: none;
    transition: box-shadow $transitionBase;

    &:focus{
      box-shadow: $shadowBase;
    }
  }

  &__refresh {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;

    &.spin {
      transition: transform $transitionBase;
      transform: rotate(180deg);
      pointer-events: none;
    }
  }

  &__badge {
    position: absolute;
    top: 50%;
    right: 64px;
    transform: translateY(-50%);
  }
}
</style>
