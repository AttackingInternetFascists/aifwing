/*
         DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
 */

#pragma once

#define HAL_ESP32_BOARD_NAME "esp32-aif"

#define TRUE						1
#define FALSE						0

//Protocols
//list of protocols/enum:	ardupilot/libraries/AP_SerialManager/AP_SerialManager.h
//default protocols:		ardupilot/libraries/AP_SerialManager/AP_SerialManager.cpp
//ESP32 serials:		AP_HAL_ESP32/HAL_ESP32_Class.cpp

#define HAL_SERIAL0_PROTOCOL			SerialProtocol_MAVLink2			    //A	UART0: Always: Console, MAVLink2
#define HAL_SERIAL0_BAUD				AP_SERIALMANAGER_CONSOLE_BAUD/1000	//115200

#define HAL_SERIAL1_PROTOCOL			SerialProtocol_None 			    //C	WiFi:  TCP, UDP, or disable (depends on HAL_ESP32_WIFI)
#define HAL_SERIAL1_BAUD				AP_SERIALMANAGER_MAVLINK_BAUD/1000	//57600

#define HAL_SERIAL2_PROTOCOL			SerialProtocol_MAVLink2 			//D	UART2: Always: MAVLink2 on ESP32
#define HAL_SERIAL2_BAUD				AP_SERIALMANAGER_MAVLINK_BAUD/1000	//57600

#define HAL_SERIAL3_PROTOCOL			SerialProtocol_GPS      			//B	UART1: GPS1
#define HAL_SERIAL4_BAUD				AP_SERIALMANAGER_GPS_BAUD/1000		//38400, Can not define default baudrate here (by config only)

#define HAL_SERIAL4_PROTOCOL			SerialProtocol_None			        //E
#define HAL_SERIAL4_BAUD				AP_SERIALMANAGER_GPS_BAUD/1000		//38400, Can not define default baudrate here (by config only)

#define HAL_SERIAL5_PROTOCOL			SerialProtocol_None     			//F
#define HAL_SERIAL5_BAUD				(115200/1000)

#define HAL_SERIAL6_PROTOCOL			SerialProtocol_None			        //G
#define HAL_SERIAL6_BAUD				(115200/1000)

#define HAL_SERIAL7_PROTOCOL			SerialProtocol_None     			//H
#define HAL_SERIAL7_BAUD				(115200/1000)

#define HAL_SERIAL8_PROTOCOL			SerialProtocol_None     			//I
#define HAL_SERIAL8_BAUD				(115200/1000)

#define HAL_SERIAL9_PROTOCOL			SerialProtocol_None     			//J
#define HAL_SERIAL9_BAUD				(115200/1000)

//I2C Buses
#define HAL_ESP32_I2C_BUSES				{.port=I2C_NUM_0, .sda=GPIO_NUM_21, .scl=GPIO_NUM_22, .speed=400*KHZ, .internal=true, .soft=true}

//SPI Buses
#define HAL_ESP32_SPI_BUSES				{}

//SPI Devices
#define HAL_ESP32_SPI_DEVICES			{}

//RCIN
#define HAL_ESP32_RCIN					GPIO_NUM_36

//RCOUT
#define HAL_ESP32_RCOUT					{ GPIO_NUM_25, GPIO_NUM_27, GPIO_NUM_33, GPIO_NUM_32, GPIO_NUM_22, GPIO_NUM_21 }

//Inertial sensors
#define HAL_INS_DEFAULT                             HAL_INS_MPU60XX_I2C
#define PROBE_IMU_I2C(driver, bus, addr, args ...)  ADD_BACKEND(AP_InertialSensor_ ## driver::probe(*this,GET_I2C_DEVICE(bus, addr),##args))
#define HAL_INS_PROBE_LIST                          PROBE_IMU_I2C(Invensense, 0, 0x68, ROTATION_NONE)

//BAROMETER
#define PROBE_BARO_I2C(driver, bus, addr, args ...) ADD_BACKEND(AP_Baro_ ## driver::probe(*this,std::move(GET_I2C_DEVICE(bus, addr)),##args))
#define HAL_BARO_PROBE_LIST                         PROBE_BARO_I2C(MS56XX, 0, 0x77)

//COMPASS
#define ALLOW_ARM_NO_COMPASS

//WIFI
// TODO: Implement MAC scanner

//BLUETOOTH
// TODO: Implement MAC scanner

//UARTs
#define HAL_ESP32_UART_DEVICES \
    {.port=UART_NUM_0, .rx=GPIO_NUM_3 , .tx=GPIO_NUM_1 },\
    {.port=UART_NUM_1, .rx=GPIO_NUM_34, .tx=GPIO_NUM_18},\
    {.port=UART_NUM_2, .rx=GPIO_NUM_35, .tx=GPIO_NUM_19}

//ADC
#define HAL_DISABLE_ADC_DRIVER				1
#define HAL_USE_ADC					        0

//LED
#define BUILD_DEFAULT_LED_TYPE				Notify_LED_None

//RMT pin number
#define HAL_ESP32_RMT_RX_PIN_NUMBER			4

//SD CARD
// Do u want to use mmc or spi mode for the sd card, this is board specific ,
//  as mmc uses specific pins but is quicker,
// and spi is more flexible pinouts....  dont forget vspi/hspi should be selected to NOT conflict with HAL_ESP32_SPI_BUSES

//#define HAL_ESP32_SDCARD //after enabled, uncomment one of below
//#define HAL_ESP32_SDMMC
//#define HAL_ESP32_SDSPI				{.host=VSPI_HOST, .dma_ch=2, .mosi=GPIO_NUM_2, .miso=GPIO_NUM_15, .sclk=GPIO_NUM_26, .cs=GPIO_NUM_21}

#define HAL_OS_POSIX_IO					    1

#define HAL_LOGGING_FILESYSTEM_ENABLED		0
#define HAL_LOGGING_DATAFLASH_ENABLED		0
#define HAL_LOGGING_MAVLINK_ENABLED			0

#define HAL_BOARD_LOG_DIRECTORY				"/SDCARD/APM/LOGS"
#define HAL_BOARD_STORAGE_DIRECTORY			"/SDCARD/APM/STORAGE"
#define HAL_BOARD_LOG_DIRECTORY				"/SDCARD/APM/LOGS"
#define HAL_BOARD_TERRAIN_DIRECTORY			"/SDCARD/APM/TERRAIN"

#define HAL_LOGGING_BACKENDS_DEFAULT		1

