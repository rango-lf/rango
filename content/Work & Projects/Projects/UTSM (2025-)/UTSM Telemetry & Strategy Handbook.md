***
## What We Do
Telemetry, as defined by Wikipedia dot com, is:

> *"... the [in situ](https://en.wikipedia.org/wiki/In_situ "In situ") [collection of measurements](https://en.wikipedia.org/wiki/Data_collection "Data collection") or other data at remote points and their automatic [transmission](https://en.wikipedia.org/wiki/Data_transmission "Data transmission") to receiving equipment ([telecommunication](https://en.wikipedia.org/wiki/Telecommunication "Telecommunication")) for monitoring. The word is derived from the [Greek](https://en.wikipedia.org/wiki/Greek_language "Greek language") roots tele, 'far off', and metron, 'measure'. Systems that need external instructions and data to operate require the counterpart of telemetry: [telecommand](https://en.wikipedia.org/wiki/Telecommand "Telecommand").*"

In previous years, UTSM Prototype relied on intuition for race strategy. These were general rules of thumb about when to accelerate, coast, or hold speed. However, this year (2026-27) and onwards, we want to invest into data-driven strategy to gain more precise insights into our vehicle's energy efficiency, speed, throttle, etc. Ideally, these results will inform better decisions in the race.

**Concretely, this means:**
- Testing the car on a dynamometer (dyno) and on an actual track
- Capturing car telemetry using sensors, data loggers, and/or GPS data
- Splitting runs into laps and computing efficiency metrics (speed, power, Wh/km, etc.)
- Visualizing results as graphs, heatmaps, and interactive dashboards
- Running simulations to find the optimal strategy before we ever get to the competition

We're also entering the [Shell Eco-Marathon Data & Telemetry Off-Track Award](https://schmid-elektronik.ch/bootcamp-sem26/), sponsored by Schmid Elektronik, which rewards teams that develop the most rigorous and complete data-driven race strategy.
## What Skills You'll Build
Think of this sub-team as a jack of all trades between Electrical & Powertrain, Aerospace, and Mechanical:
- **Software & data science** — Python, signal processing, GPS data, pandas, matplotlib
- **Electrical** — understanding current, voltage, power, and energy measurements
- **Physics & dynamics** — vehicle motion modelling, rolling resistance, acceleration forces, grade effects
- **Aerospace-style systems thinking** — sensor fusion, data pipelines, and simulation, similar to what aerospace engineers do with flight telemetry
- **Race strategy** — translating data into actionable decisions for the driver

We don't expect anyone to come into this team knowing everything. Since this is a completely new subdivision, we'll all be on this learning journey together.
### The Telemetry Analysis & Simulation Project
The core of our work lives in a shared GitHub repo ([utsm-proto-telemetry-v1](https://github.com/rango-lf/utsm-proto-telemetry-v1/tree/master)), developed by myself and 2026-27 Proto Technical Director [Brayden](https://ca.linkedin.com/in/b-chan-carusone). It is actively in development.

The tools form a pipeline: raw sensor data goes in one end, and race insights come out the other.
1. **Ingest** — reads onboard telemetry (current, voltage, IMU acceleration) and GPX GPS track files
2. **Align & split** — synchronizes the two data streams by timestamp and automatically detects lap boundaries using current spikes and GPS start-gate crossing
3. **Analyze** — computes lap duration, distance, speed, power, cumulative energy (Wh), efficiency (Wh/km), and acceleration profiles
4. **Visualize** — generates per-lap heatmaps showing where on track the car is drawing power or coasting, sector-by-sector breakdowns, and speed-efficiency curves
5. **Simulate** — fits a physics model to the real run data, then optimizes a speed profile (when to accelerate, hold, or coast across each track segment) to minimize energy use within a target lap time

Current areas of active development include improving lap detection accuracy, adding corner resistance to the physics model, building a stable track map from averaged GPS data, and exploring live pit-side data streaming during runs.