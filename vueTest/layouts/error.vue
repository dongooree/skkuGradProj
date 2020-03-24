<template>
    <div>
        <h1 v-if="error.statusCode === 404">페이지를 찾을 수 없습니다.</h1>
        <h1 v-else>에러가 발생했습니다요!!</h1>
    </div>
</template>

<script>
export default {
    // 예를 들어 인자 이름이 'board'라면 layout dir의 board.vue를 레이아웃으로 사용함.
    props: ['error'] // 외부에서 error 인자를 받음. 해당 파일에서 데이터 바인딩할 수 있음.
}
</script>
