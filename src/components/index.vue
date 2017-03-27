<template>
  <div>
    <smile></smile>
    {{ voiceListen }}
    <!-- <router-link to="/goto"> play </router-link> -->
  </div>
</template>

<script>
/* eslint-disable */
import smile from './render/smile'
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
var mode = ['play']
export default {
  name: 'index',
  data () {
    return {
      grammar: '#JSGF V1.0; grammar colors; public <action> = ' + mode.join(' | ') + ' ;',
      msg: ''
    }
  },
  components: {
    smile
  },
  mounted () {
    recognition.start()
  },
  methods: {
    voiceMode (mode, status) {
      console.log(mode, status)
      setTimeout (() => {
        if (status === true) recognition.start()
      },2000)
    }
  },
  computed: {
    voiceListen () {
      var vm = this
      recognition.onresult = function (event) {
        vm.msg = event.results[0][0].transcript
        vm.voiceMode(vm.msg, event.results[0].isFinal)
      }
      return vm.msg
    }
  }
}
</script>
