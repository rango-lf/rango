***
>[!info] WORK IN PROGRESS
## what?
Telemetry, as defined by Wikipedia dot com, is:

> *"... the [in situ](https://en.wikipedia.org/wiki/In_situ "In situ") [collection of measurements](https://en.wikipedia.org/wiki/Data_collection "Data collection") or other data at remote points and their automatic [transmission](https://en.wikipedia.org/wiki/Data_transmission "Data transmission") to receiving equipment ([telecommunication](https://en.wikipedia.org/wiki/Telecommunication "Telecommunication")) for monitoring. The word is derived from the [Greek](https://en.wikipedia.org/wiki/Greek_language "Greek language") roots tele, 'far off', and metron, 'measure'. Systems that need external instructions and data to operate require the counterpart of telemetry: [telecommand](https://en.wikipedia.org/wiki/Telecommand "Telecommand").*"

In previous years, UTSM Prototype relied on intuitive strategy (i.e. general driving strategy). However, this year (2026-27) and onwards, we want to invest into data-driven strategy to gain better insights into our vehicle's energy efficiency, speed, throttle, etc. Ideally, this will help us perform better during the competition.

As well, we are aiming to enter the SEMA Data and Telemetry Award contest sponsored by Schmid Elektronik. 

**This involves:**
- Testing the car on a dynamometer (dyno) and on an actual track
- Capturing car telemetry using sensors, data loggers, and GPS data
- Analyzing, computing, and outputting the following data:
	- Lap duration and distance
	- Speed
	- Current, voltage, power, and Wh
	- Wh/km efficiency
	- Acceleration
	- Speed efficiency 
- Modelling data with graphs and heatmaps
- Running strategy simulations with interactive apps

## github repo
The link below contains the Python tools I, and the 2026-27 Proto Captain (and dear friend) [Brayden](https://ca.linkedin.com/in/b-chan-carusone), have worked on. *Please mind that it is a work in progress.*

**[utsm-proto-telemetry-v1](https://github.com/rango-lf/utsm-proto-telemetry-v1/tree/master)**

**What it does:**
1. Reads the car telemetry
2. Aligns it with GPX track data
3. Splits runs into laps
4. Analyzes energy use
5. Replays runs in an interactive dashboard
