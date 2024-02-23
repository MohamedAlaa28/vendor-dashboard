import { useRef, useState } from "react";
// import InvoiceSelect from "../../components/Invoice/InvoiceSelect";
// import InvoiceUploadInvoice from "../../components/Invoice/InvoiceUploadInvoice";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InvoiceUploadInvoice from "./components/InvoiceUploadInvoice";
import InvoiceSelect from "./components/InvoiceSelect";

function isEmpty(object) {
    for (const property in object) {
        return false;
    }
    return true;
}

export default function Invoice() {

    const checkbox = useRef();
    const checkboxes = useRef();
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selectedproduct, setSelectedproduct] = useState([]);
    const [count, setCount] = useState(0);
    // let count = 0;

    function toggleAll() {
        setSelectedproduct(checked || indeterminate ? [] : invoices);
        setChecked(!checked && !indeterminate);
        setIndeterminate(false);
        if (checkbox.current.checked) {
            setCount(invoices.length);
        }
        if (!checkbox.current.checked) {
            setCount(0);
        }

    }

    function checkboxesFun(e, invoice) {
        setSelectedproduct(
            e ? [...selectedproduct, invoice, setCount(count + 1)]
                :
                selectedproduct.filter((p) => p !== invoice)
        )
        if (e === false) {
            setCount(count - 1);
            console.log(count)
        }
        if (e === true) {
            setCount(count + 1);
            console.log(count)
        }
        console.log(count)
    }

    const [invoices, setInvoices] = useState([
        {
            invoiceId: "#015545df",
            dateSent: "23/5/2022",
            status: "Pending",
            description: "Lorem ipsum dolor sit amen",
        },
        {
            invoiceId: "#0153453",
            dateSent: "23/5/2022",
            status: "Donated",
            description: "Lorem ipsum dolor sit amen",
        },
        {
            invoiceId: "#0153453",
            dateSent: "23/5/2022",
            status: "Donated",
            description: "Lorem ipsum dolor sit amen",
        },
        {
            invoiceId: "#0153453",
            dateSent: "23/5/2022",
            status: "Donated",
            description: "Lorem ipsum dolor sit amen",
        },

        // More product...
    ]
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8">

            <div className="relative flex row gap-x-14">

                <div className="mt-4 sm:mt-8 flex justify-between">
                    <div className="flex gap-4 items-center">
                        <input
                            type="checkbox"
                            className="mt-1 ml-16 h-4 w-4 rounded border-[#3D897A] text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                        />
                        <p className="text-[#686868]" style={{ font: 'normal normal medium 14px/17px Urbanist' }}>{count} select</p>
                    </div>
                </div>

                <div className="mt-4 sm:mt-8  flex justify-between">
                    <div className="flex gap-2 items-center">
                        <InvoiceSelect />
                    </div>
                </div>

                <div className="absolute mt-4 sm:mt-8  flex justify-between right-0">
                    <div className="flex gap-2 items-center">
                        <InvoiceUploadInvoice />
                    </div>
                </div>

            </div>

            <div className="mt-8 flex flex-col" style={{ 'box-shadow': '0px 10px 60px #DCDCDC8C' }}>
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-4 bg-white">
                            {
                                !isEmpty(invoices) ?
                                    <table className="min-w-full" >
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="relative w-12 px-6 sm:w-16 sm:px-8"
                                                >

                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left font-normal text-[#686868] sm:pl-6"
                                                >
                                                    <p className="ml-10">Invoice ID</p>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left font-normal text-[#686868]"
                                                >
                                                    Date Sent
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left font-normal text-[#686868]"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left font-normal text-[#686868]"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left font-normal text-[#686868]"
                                                >
                                                    <p className="ml-16">Action</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {invoices.map((invoice) => (
                                                <tr key={invoice.invoiceId} className='hover:bg-gray hover:bg-[#F2F4F7]'>
                                                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                        {selectedproduct.includes(invoice) && (
                                                            <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3D897A]" />
                                                        )}
                                                        <input
                                                            type="checkbox"
                                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3D897A] focus:ring-[#3D897A] sm:left-6 ml-10"
                                                            value={invoice.invoiceId}
                                                            ref={checkboxes}
                                                            checked={selectedproduct.includes(invoice)}
                                                            onChange={(e) => checkboxesFun(e.target.checked, invoice)}
                                                        />
                                                    </td>
                                                    <td className="whitespace-nowrap py-4 text-sm">
                                                        <div className="ml-4 text-gray-500 ml-[65px]">
                                                            {invoice.invoiceId}
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="text-gray-500">{invoice.dateSent}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className={invoice.status === 'Donated' ? "inline-flex rounded-full bg-[#3D897A] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#3D897A]"
                                                            : "inline-flex rounded-full bg-[#F88700] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#F88700]"}>
                                                            {invoice.status}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="text-gray-500"><p className="w-[10px]">{invoice.description}</p></div>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="ml-16">
                                                            <button><FileDownloadOutlinedIcon className="w-5" /> Download</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    :
                                    <div className="lg:block relative flex-1 w-full bg-white px-[400px] py-12 w-full">
                                        <div className="ml-20">
                                            <img
                                                className="object-cover"
                                                src="/Layer_1-2.svg"
                                                alt=""
                                            />
                                            <div>
                                                <p className='mt-5 text-[18px] text-[#232323] w-full'>You Do not have any invoice yet!</p>
                                                <p className='ml-2 text-[16px] text-[#707082] w-full'>Start uploading your invoice now!</p>
                                            </div>
                                            <div className="mt-5 ml-10">
                                                <InvoiceUploadInvoice />
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex row gap-5">

                <button onClick={() => setInvoices([])}>empty</button>
                <button onClick={() => setInvoices([
                    {
                        invoiceId: "#015545df",
                        dateSent: "23/5/2022",
                        status: "Pending",
                        description: "Lorem ipsum dolor sit amen",
                    },
                    {
                        invoiceId: "#0153453",
                        dateSent: "23/5/2022",
                        status: "Donated",
                        description: "Lorem ipsum dolor sit amen",
                    },
                    {
                        invoiceId: "#0153453",
                        dateSent: "23/5/2022",
                        status: "Donated",
                        description: "Lorem ipsum dolor sit amen",
                    },
                ]
                )}>fill</button>

            </div>

        </div>
    );
}
