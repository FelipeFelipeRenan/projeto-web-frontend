import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/Ripple";
import { StyleClass } from "primereact/StyleClass";

function Menu() {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1  surface-border select-none"
              style={{ width: "100%" }}
            >
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <img src="./images" alt="log" />
                    <span className="font-semibold text-2xl text-primary">
                      SISTEMA
                    </span>
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className="h-2rem w-2rem"
                    ></Button>
                  </span>
                </div>
                <div className="overflow-y-auto" style={{ margin: "5% 0 0 0" }}>
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <StyleClass
                            nodeRef={btnRef2}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef2}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-bolt mr-2"></i>
                              <span className="font-medium">TASK</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">VISUALIZAR</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">CADASTRAR</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef4}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef4}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-check mr-2"></i>
                              <span className="font-medium">SQUAD</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">VISUALIZAR</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef3}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef3}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-moon mr-2"></i>
                              <span className="font-medium">SPRINT</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">-----</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                  <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar image="./IMAGES" shape="circle" />
                    <span className="font-bold">NOME USUARIO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
      <div className="" style={{ margin: "0 95% 0 0" }}>
        <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
      </div>
    </div>
  );
}

export default Menu;
