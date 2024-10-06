<script setup lang="ts">
import { UnfoLayout } from "shared/ui/UnfoLayout";
</script>

<template>
  <div class="container">
    <UnfoLayout title="О нас">
      <p class="text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
        латинице с начала XVI века. В то время некий безымянный печатник создал
        большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
        изменений пять веков, но и перешагнул в электронный дизайн. Lorem Ipsum
        - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
        Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI
        века. В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
        Lorem Ipsum не только успешно пережил без заметных изменений пять веков,
        но и перешагнул в электронный дизайн.
      </p>
    </UnfoLayout>
  </div>
</template>

<style scoped lang="scss">
@import "app/styles/variables.scss";

.text {
  font-size: 12px;
  line-height: 204%;
  letter-spacing: 0.08em;
  text-align: center;

  @media (min-width: $mobileL) {
    padding: 0 30px;
    font-size: 23px;
    line-height: 211%;
    letter-spacing: 0.04em;
    color: #252525;
  }
}
</style>
