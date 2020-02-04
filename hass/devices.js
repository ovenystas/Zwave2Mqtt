/* eslint-disable quotes */

// Place here repeated patterns
var FAN_DIMMER = {
  type: 'fan',
  object_id: 'dimmer',
  values: ['38-1-0'],
  discovery_payload: {
    command_topic: "38-1-0",
    speed_command_topic: "38-1-0",
    speed_state_topic: "38-1-0",
    state_topic: "38-1-0",
    speeds: ["off", "low", "medium", "high"],
    payload_low_speed: 24,
    payload_medium_speed: 50,
    payload_high_speed: 99,
    payload_off: 0,
    payload_on: 255,
    state_value_template: "{% if (value_json.value | int) == 0 %} 0 {% else %} 255 {% endif %}",
    speed_value_template: "{% if (value_json.value | int) == 0 %}  0  {% elif (value_json.value | int) <= 32 %}  24  {% elif (value_json.value | int) <= 66 %} 50 {% elif (value_json.value | int) <= 99 %} 99 {% endif %}"
  }
}

// Eurotronic Spirit Z-Wave Plus Thermostat
var SPIRIT_ZWAVE_PLUS = {
  type: 'climate',
  object_id: 'thermostat',
  values: ['64-1-0', '49-1-1', '67-1-1', '67-1-11'],
  mode_map: { 'off': 'Off', 'heat': 'Heat', 'cool': 'Heat Eco' },
  setpoint_topic: { 'Heat': '67-1-1', 'Heat Eco': '67-1-11' },
  default_setpoint: '67-1-1',
  discovery_payload: {
    min_temp: 8,
    max_temp: 28,
    modes: ['off', 'heat', 'cool'],
    mode_state_topic: '64-1-0',
    mode_command_topic: true,
    current_temperature_topic: '49-1-1',
    current_temperature_template: '{{ value_json.value }}',
    temperature_state_template: '{{ value_json.value }}',
    temperature_command_topic: true
  }
}

// var COVER = {
//   type: 'cover',
//   object_id: 'position',
//   values: ['38-1-0'],
//   discovery_payload: {
//     command_topic: "38-1-0",
//     position_topic: "38-1-0",
//     set_position_topic: "38-1-0",
//     value_template: "{{ (value_json.value / 99 * 100) | round(0) }}",
//     position_open: 99,
//     position_closed: 0,
//     payload_open: "99",
//     payload_close: "0"
//   }
// }

module.exports = {
  '411-1-1': [
    { // Heatit Thermostat TF 021 (ThermoFloor AS)
      type: 'climate',
      object_id: 'thermostat',
      values: ['64-1-0', '49-1-1', '67-1-1', '67-1-2'],
      mode_map: { 'off': 'Off', 'heat': 'Heat (Default)', 'cool': 'Cool' },
      setpoint_topic: { "Heat (Default)": '67-1-1', "Cool": '67-1-2' },
      default_setpoint: '67-1-1',
      discovery_payload: {
        min_temp: 15,
        max_temp: 30,
        modes: ['off', 'heat', 'cool'],
        mode_state_topic: '64-1-0',
        mode_command_topic: true,
        current_temperature_topic: '49-1-1',
        current_temperature_template: '{{ value_json.value }}',
        temperature_state_template: '{{ value_json.value }}',
        temperature_command_topic: true
      }
    }
  ],
  '411-514-3': [ // Heatit Thermostat TF 056 (ThermoFloor AS)
    {
      type: 'climate',
      object_id: 'thermostat',
      values: ['64-1-0', '49-1-1', '67-1-1', '67-1-2'],
      mode_map: { 'off': 'Off', 'heat': 'Heat', 'cool': 'Cool' },
      setpoint_topic: { "Heat": '67-1-1', "Cool": '67-1-2' },
      default_setpoint: '67-1-1',
      discovery_payload: {
        min_temp: 15,
        max_temp: 30,
        modes: ['off', 'heat', 'cool'],
        mode_state_topic: '64-1-0',
        mode_command_topic: true,
        current_temperature_topic: '49-1-1',
        current_temperature_template: '{{ value_json.value }}',
        temperature_state_template: '{{ value_json.value }}',
        temperature_command_topic: true
      }
    }
  ],
  '271-4097-2048': [ // Fibaro Motion Sensor FGMS001
    { // General Purpose Alarm
      type: 'binary_sensor',
      object_id: 'alarm',
      values: ['156-1-0'],
      discovery_payload: {
        payload_on: 255,
        payload_off: 0,
        value_template: '{{ value_json.value }}',
        device_class: 'problem'
      }
    },
    { // Motion Sensor
      type: 'binary_sensor',
      object_id: 'motion',
      values: ['48-1-0'],
      discovery_payload: {
        payload_on: true,
        payload_off: false,
        value_template: '{{ value_json.value }}',
        device_class: 'motion'
      }
    },
  ],
  '271-4098-2049': [ // Fibaro Motion Sensor FGMS001-ZW5
    { // Binary Sensor, General Purpose Alarm
      type: 'binary_sensor',
      object_id: 'alarm',
      values: ['156-1-0'],
      discovery_payload: {
        payload_on: 255,
        payload_off: 0,
        value_template: '{{ value_json.value }}',
        device_class: 'problem'
      }
    },
    { // Binary Sensor, Motion Sensor
      type: 'binary_sensor',
      object_id: 'motion',
      values: ['48-1-0'],
      discovery_payload: {
        payload_on: true,
        payload_off: false,
        value_template: '{{ value_json.value }}',
        device_class: 'motion'
      }
    },
    { // Multilevel Sensor, Seismic intensity
      type: 'sensor',
      object_id: 'seismic_intensity',
      values: ['49-1-25'],
      discovery_payload: {
        unit_of_measurement: 'mm',
        value_template: '{{ value_json.value }}',
        icon: 'mdi:pulse'
      }
    },
    { // Multilevel Sensor, Acceleration, X-axis
      type: 'sensor',
      object_id: 'acceleration_x',
      values: ['49-1-52'],
      discovery_payload: {
        unit_of_measurement: 'm/s²',
        value_template: '{{ value_json.value }}',
        icon: 'mdi:axis-x-arrow'
      }
    },
    { // Multilevel Sensor, Acceleration, Y-axis
      type: 'sensor',
      object_id: 'acceleration_y',
      values: ['49-1-53'],
      discovery_payload: {
        unit_of_measurement: 'm/s²',
        value_template: '{{ value_json.value }}',
        icon: 'mdi:axis-y-arrow'
      }
    },
    { // Multilevel Sensor, Acceleration, Z-axis
      type: 'sensor',
      object_id: 'acceleration_z',
      values: ['49-1-54'],
      discovery_payload: {
        unit_of_measurement: 'm/s²',
        value_template: '{{ value_json.value }}',
        icon: 'mdi:axis-z-arrow'
      }
    },
  ],
  '99-12340-18756': [FAN_DIMMER], // GE 1724 Dimmer
  '99-12593-18756': [FAN_DIMMER], // GE 1724 Dimmer
  '328-1-3': [SPIRIT_ZWAVE_PLUS],
  '328-3-3': [SPIRIT_ZWAVE_PLUS]
}
// x-y-z
/* Command classes x-
48  0x30 Binary Sensor
49  0x31 Multilevel Sensor
64  0x40 Thermostat Mode
67  0x43 Thermostat Setpoint
128 0x80 Battery
156 0x9C Alarm Sensor
*/
/* xxx -y-
*/
/* Binary Sensor Types -z
0   0x00 General Purpose Alarm
1   0x01 Smoke Alarm
2   0x02 CO Alarm
3   0x03 CO2 Alarm
4   0x04 Heat Alarm
5   0x05 Water Leak Alarm
255 0xFF Return first Alarm on supported list
*/
/* Multilevel Sensor Types -z
25  0x19 Seismic Intensity
52  0x34 Acceleration, X-axis
53  0x35 Acceleration, Y-axis
54  0x36 Acceleration, Z-axis
*/
