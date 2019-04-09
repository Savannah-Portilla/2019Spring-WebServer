<template>
<div>

    <h1>My Friends Page</h1>
    <ul>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
    </ul>
</div>
</template>

<script>
export default {
}
</script>

<style>
</style>
<template>
<div>

    <h1>My Friends Page</h1>
    <h1 v-if="Globals.user">{{Globals.user.name}} Friends Page</h1>
    <ul>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li>Friend 1</li>
        <li v-for="friend in friends" :key="friend.id">
            {{friend.FirstName}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
import { Globals } from "@/models/api";
import { GetFriends } from "@/models/users.js";
export default {
    data: ()=> ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        this.friends = await GetFriends();
    }
}
</script>
