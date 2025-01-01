# README.md

# Network Automation Tool

## Overview

The Network Automation Tool is a web-based application designed to configure, analyze, monitor, and generate real-time performance reports for network devices. It supports various device types and provides a user-friendly interface for managing configurations and monitoring device health.

## Features

- **Configuration Management**: 
  - Add, edit, and delete jumpbox connections.
  - Manage devices, including device types and OS types.
  - Handle user credentials for device login.

- **Automated Configuration**: 
  - Automatically enter configuration menus for devices.
  - Use Jinja2 templates for generating device configurations.
  - Support for Cisco, Juniper, and Huawei devices.

- **Data Analysis**: 
  - Analyze network data using an advanced neural network powered by TensorFlow.
  - Integrate with Cisco DNA, Juniper MIST AI, and Huawei NCE Campus mechanisms.

- **Monitoring**: 
  - Monitor traffic rates, fiber optic attenuation, and device health metrics.
  - Provide tools for common network tests such as ping and traceroute.

- **Reporting**: 
  - Generate real-time performance graphs displayed on a web dashboard.
  - Export reports in .xlsx and .pdf formats.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd network-automation-tool
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Directory Structure

```
network-automation-tool
├── src
│   ├── app.ts
│   ├── config
│   ├── templates
│   ├── services
│   ├── models
│   ├── utils
│   └── routes
├── public
│   └── dashboard.html
├── package.json
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.