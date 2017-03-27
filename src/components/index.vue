<template>
  <div>
    <smile></smile>
    {{ voiceListen }} <br>
    {{ store.state.text }}
  </div>
</template>

<script>
/* eslint-disable */
import smile from './render/smile'
import router from '../router'
import store from '../vuex/store'
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
console.log(SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent)
var recognition = new SpeechRecognition()
var speechRecognitionList = new SpeechGrammarList()
recognition.grammars = speechRecognitionList
recognition.continuous = false
recognition.lang = 'en-US'
recognition.interimResults = true
recognition.maxAlternatives = 1
console.log(recognition, speechRecognitionList)
var mode = ['play', 'cat']
export default {
  name: 'index',
  data () {
    return {
      grammar: '#JSGF V1.0; grammar colors; public <action> = ' + mode.join(' | ') + ' ;',
      msg: '',
      status: false,
      store
    }
  },
  components: {
    smile
  },
  mounted () {
    recognition.start()
  },
  methods: {
    voiceMode (text, status) {
      console.log(text, status)
      if (text.search('play') > -1) {
        // store.commit('addText', text)
        console.log('to play the game')
        router.push({ path: '/goto' })
      }
        setTimeout (() => {
          if (status === true) recognition.start()
        },1000)
    }
  },
  computed: {
    voiceListen () {
      var vm = this
      recognition.onaudiostart = function() {
        console.log('Audio capturing started')
      }
      recognition.onresult = function (event) {
        vm.msg = event.results[0][0].transcript
        vm.status = event.results[0].isFinal
        vm.voiceMode(vm.msg, event.results[0].isFinal)
      }
      recognition.onerror = function(event) {
        console.log('error')
        recognition.stop()
      }
      return vm.msg
    }
  }
}
</script>
