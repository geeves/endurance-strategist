package wtf.bono.strategist.health

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class HealthController {

	@GetMapping("/healthcheck")
	fun heathCheck(): ResponseEntity<JsonNode> {
		val mapper = jacksonObjectMapper()
		return ResponseEntity.ok(mapper.readTree("""{"status":"health is ok"}"""))
	}

	@GetMapping("/")
	fun index(): ResponseEntity<JsonNode> {
		val mapper = jacksonObjectMapper()
		return ResponseEntity.ok(mapper.readTree("""{"status":"index"}"""))
	}

}

