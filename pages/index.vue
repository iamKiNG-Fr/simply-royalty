<template>
    <div class="container">
        <nav>
            <div class="center-nav">
                <img class="logo" src="/img/sr-rg-logo.svg" alt="simply royaltylogo">
                <p class="nav-title">Simply Royalty</p>
            </div>
        </nav>
        <div class="content">
            <h2>A<span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </h2>
        </div>
        <div class="interact">
            <p class="interact-text">interact with ROYALTY here</p>
            <div class="social-icon">
                <a href="https://www.instagram.com/hmkingfr/" target="_blank" rel="noopener noreferrer" ><img src="/logo/instagram-circle.svg" alt="youtube"></a>
                <a href="https://www.youtube.com/@HMKiNGFr" target="_blank" rel="noopener noreferrer"><img src="/logo/youtube-circle.svg" alt="instagram" ></a>
                <a href="mailto:heyking.fr@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/logo/email-circle.svg" alt="email"></a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['n Artist', 'n Innovator', ' Poet', ' King'],
                typingSpeed: 200,
                erasingSpeed: 100,
                newTextDelay: 2000,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
        methods: {
            typeText(){
                if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
                    if(!this.typeStatus){
                        this.typeStatus = true
                    }
                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
                    this.charIndex += 1

                    setTimeout(this.typeText, this.typingSpeed)
                }
                else {
                    this.typeStatus =false
                    setTimeout(this.eraseText, this.newTextDelay)
                }
            },
            eraseText(){
                if(this.charIndex > 0){
                    if(!this.typeStatus)
                        this.typeStatus = true

                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1 )
                    this.charIndex -= 1
                    setTimeout(this.eraseText, this.erasingSpeed)
                }
                else{
                    this.typeStatus = false
                    this.typeArrayIndex += 1
                    if(this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0

                    setTimeout(this.typeText, this.typingSpeed + 1000)
                }
            },
        },
        mounted() {
            setTimeout(this.typeText, this.newTextDelay + 200)
        }
    }
</script>

<style>
    @keyframes cursorBlink{
        49% {background-color: var(--royal-white);}
        50% {background-color: transparent;}
        99% {background-color: transparent;}
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
    }
    nav{
        padding: 1em;
    }
    .center-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .center-nav .logo{
        width: 4.5em;
    }
    .nav-title{
        font-family: var(--title-font);
        color: var(--royal-gold);
        font-size: 2em;
        font-weight: 700;
    }
    .content{
        font-family: var(--title-font);
        font-size: 700;
        font-size: 8em;
        color: var(--royal-white);
    }
    .cursor{
        display: inline;
        margin-left: 3px;
        width: 4px;
        background-color: var(--royal-white);
        animation: cursorBlink 1s infinite;
    }
    span.cursor.typing{
        animation: none;
    }
    .interact{
        padding-bottom: 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .interact-text{
        font-family: var(--art-font);
        color: var(--royal-white);
        font-size: 1.2em;
    }
    .social-icon{
        margin-top: 1em;
        width: 10rem;
        display: flex;
        justify-content: space-between;
    }
    .social-icon a img{
        width: 2em;
        filter: invert(73%) sepia(79%) saturate(743%) hue-rotate(342deg) brightness(103%) contrast(101%);
    }
        /* Styles for screens with a maximum width of 768 pixels (typical for tablets) */
    @media (max-width: 768px) {
        /* Adjust styles for tablets */
    }

    /* Styles for screens with a maximum width of 480 pixels (typical for mobile devices) */
    @media (max-width: 480px) {
        /* Adjust styles for mobile devices */
        .center-nav .logo{
            width: 2em;
        }
        .nav-title{
            font-size: 1.2em;
        }
        .content{
            font-size: 2em;
            color: var(--royal-white);
        }
    }
</style>