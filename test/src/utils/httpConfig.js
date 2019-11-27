const serviceHost =
  process.env.NODE_ENV === "development"
    ? "https://yzh.quickhealmall.com/api/"
    : "https://yhz.quickhealmall.com/api/"
//便于使用多个域名
const globalServiceHost = {
  // mailServiceHost: "https://yzh.365zjk.net/prescriptionapi",
  fullServiceHost: serviceHost.substring(0, serviceHost.length - 5),
  selfMachineHost: serviceHost + 'ygtapi',
  mockServiceHost:"https://yhz.quickhealmall.com/ygtapi"
}
const servicePort = "8080" // 8080
const serviceName = "" // FishFamily
const chenID = ""

export {
  serviceHost,
  servicePort,
  serviceName,
  chenID,
  globalServiceHost
}
